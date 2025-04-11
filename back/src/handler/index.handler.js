const allAlumnHandler = require("./usuarios/alumnos/allAlumn");
const createAlumnHandler = require("./usuarios/alumnos/createAlumns");
const alumnIdHandler = require("./usuarios/alumnos/alumnID");
const updateAlumnHandler = require("./usuarios/alumnos/updateAlumn");
const deleteAlumnHandler = require("./usuarios/alumnos/deleteAlumn");

// PROFESOR
const allProfesorHandler = require("./usuarios/profesor/allProfesor");

module.exports = {
  allAlumnHandler,
  createAlumnHandler,
  alumnIdHandler,
  updateAlumnHandler,
  deleteAlumnHandler,
  //PROFESOR
  allProfesorHandler,
};
