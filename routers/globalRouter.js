import express from "express";
import routers from "../routers";
import routes from "../routers";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("home"));
globalRouter.get(routes.join, (req, res) => res.send("join"));
globalRouter.get(routes.login, (req, res) => res.send("login"));
globalRouter.get(routes.logout, (req, res) => res.send("logout"));
globalRouter.get(routes.search, (req, res) => res.send("search"));

export default globalRouter;
