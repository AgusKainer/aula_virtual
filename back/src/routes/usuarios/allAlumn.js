const { Router } = require("express");
const {
  allAlumnHandler,
  createAlumnHandler,
} = require("../../handler/index.handler");
const routerAlumn = Router();

routerAlumn.get("/allalumn", allAlumnHandler);
routerAlumn.post("/createalumn", createAlumnHandler);

module.exports = routerAlumn;
