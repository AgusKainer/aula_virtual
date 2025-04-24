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
// ADMIN
const creteAdminController = require("./usuarios/admin/createAdmin");
const deleteAdminController = require("./usuarios/admin/deleteAdmin");
const idAdminController = require("./usuarios/admin/idAdmin");
const updateAdminController = require("./usuarios/admin/updateAdmin");
const allAdminController = require("./usuarios/admin/allAdmin");

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
  //ADMIN
  creteAdminController,
  deleteAdminController,
  idAdminController,
  updateAdminController,
  allAdminController,
};
