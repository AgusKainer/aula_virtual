const allAlumnController = require("./usuarios/alumnos/allAlumn");
const createAlumnController = require("./usuarios/alumnos/createAlumns");
const alumnIdController = require("./usuarios/alumnos/alumnID");
const updateAlumnController = require("./usuarios/alumnos/updateAlumn");
const deleteAlumnController = require("./usuarios/alumnos/deleteAlumn");
/// PRFESOR
const allProfesorController = require("./usuarios/profesor/allProfesor");
const createPorfesorController = require("./usuarios/profesor/createProfesor");
const updateProfesorController = require("./usuarios/profesor/updateProfesor");
const profesorIdController = require("./usuarios/profesor/profesorID");

module.exports = {
  allAlumnController,
  createAlumnController,
  alumnIdController,
  updateAlumnController,
  deleteAlumnController,
  //PROFESOR
  allProfesorController,
  createPorfesorController,
  profesorIdController,
  updateProfesorController,
};
