/*
nombre
apellido
email
contraseña
rol(alumno,profesor,admin)
fecha_ingreso
*/

const { Sequelize, DataTypes } = require("sequelize");
const conectionDB = require("../../db/dbConection");

const Alumnos = conectionDB.define("Alumnos", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  contraseña: {
    type: DataTypes.STRING,
  },
  rol: {
    type: DataTypes.STRING,
    defaultValue: "alumno",
  },
  fechaIngreso: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Alumnos;
