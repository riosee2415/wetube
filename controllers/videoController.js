import routes from "../routers";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videoList });
};

export const search = (req, res) => {
  // const searchingBy = req.query.term;
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "search", searchingBy, videoList });
};

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;

  // To do : Upload and save video
  res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "VideoDetail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "EditVideo" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "DeleteVideo" });
