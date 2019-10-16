import express from "express";
import routes from "../routers";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  logout,
  postJoin,
  getLogin,
  postLogin
} from "../controllers/userController";

const globalRouter = express.Router();

// global
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
