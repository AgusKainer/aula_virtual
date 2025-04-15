const { Router } = require("express");
const {
  allProfesorHandler,
  createPrfesorHandler,
  profesorIdHandler,
  updateProfesorHandler,
} = require("../../handler/index.handler");
const routerProfesor = Router();

routerProfesor.get("/profesor/:id", profesorIdHandler);
routerProfesor.put("/actualizar/:id", updateProfesorHandler);
routerProfesor.get("/allprofesor", allProfesorHandler);
routerProfesor.post("/createprofesor", createPrfesorHandler);

module.exports = routerProfesor;
