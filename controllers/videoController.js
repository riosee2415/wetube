import routes from "../routers";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  // const searchingBy = req.query.term;
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "search", searchingBy, videos });
};

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });

  console.log(newVideo);

  // To do : Upload and save video
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${Video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;

  try {
    await Video.findOneAndUpdate({ id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "DeleteVideo" });
