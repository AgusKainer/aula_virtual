/*
curso_id
titulo
descripcion
fechaClase
grabacion_id
*/

const { DataTypes } = require("sequelize");
const conectionDB = require("../../db/dbConection");
const Cursos = require("./Cursos");

const Clases = conectionDB.define("Clases", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  curso_id: {
    type: DataTypes.UUID,
    references: {
      model: Cursos,
      key: "id",
    },
  },
  titulo: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  fechaClase: {
    type: DataTypes.DATE,
  },
});

module.exports = Clases;
