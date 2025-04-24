const allAlumnHandler = require("./usuarios/alumnos/allAlumn");
const createAlumnHandler = require("./usuarios/alumnos/createAlumns");
const alumnIdHandler = require("./usuarios/alumnos/alumnID");
const updateAlumnHandler = require("./usuarios/alumnos/updateAlumn");
const deleteAlumnHandler = require("./usuarios/alumnos/deleteAlumn");

// PROFESOR
const allProfesorHandler = require("./usuarios/profesor/allProfesor");
const createPrfesorHandler = require("./usuarios/profesor/createProfesor");
const updateProfesorHandler = require("./usuarios/profesor/updateProfesor");
const profesorIdHandler = require("./usuarios/profesor/profesorID");

// ADMIN
const allAdminHandler = require("./usuarios/admin/allAdmin");
const createAdminHandler = require("./usuarios/admin/createAdmin");
const deleteAdminHandler = require("./usuarios/admin/deleteAdmin");
const idAdminHandler = require("./usuarios/admin/idAdmin");
const updateAdminHandler = require("./usuarios/admin/updateAmin");

module.exports = {
  allAlumnHandler,
  createAlumnHandler,
  alumnIdHandler,
  updateAlumnHandler,
  deleteAlumnHandler,
  //PROFESOR
  allProfesorHandler,
  createPrfesorHandler,
  updateProfesorHandler,
  profesorIdHandler,
  allAdminHandler,
  createAdminHandler,
  deleteAdminHandler,
  idAdminHandler,
  updateAdminHandler,
};
