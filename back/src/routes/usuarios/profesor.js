const { Router } = require("express");
const { allProfesorHandler } = require("../../handler/index.handler");
const routerProfesor = Router();

routerProfesor.get("/allprofesor", allProfesorHandler);

module.exports = routerProfesor;
