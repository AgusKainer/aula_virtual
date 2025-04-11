const { Router } = require("express");
const {
  allAlumnHandler,
  createAlumnHandler,
  alumnIdHandler,
  updateAlumnHandler,
  deleteAlumnHandler,
} = require("../../handler/index.handler");
const routerAlumn = Router();

routerAlumn.get("/alumno/:id", alumnIdHandler);
routerAlumn.put("/alumno/actualizar/:id", updateAlumnHandler);
routerAlumn.delete("/alumno/eliminar/:id", deleteAlumnHandler);
routerAlumn.get("/todosalumnos", allAlumnHandler);
routerAlumn.post("/crearalumno", createAlumnHandler);

module.exports = routerAlumn;
