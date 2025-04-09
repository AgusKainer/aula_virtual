/*
curso_id
titulo
descripcion
fechaPublicada
fechaVencimiento
*/
const { DataTypes } = require("sequelize");
const conectionDB = require("../../db/dbConection");
const Cursos = require("./Cursos");

const Evaluaciones = conectionDB.define("Evaluaciones", {
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
  fechaPublicada: {
    type: DataTypes.DATE,
  },
  fechaVencimiento: {
    type: DataTypes.DATE,
  },
});

module.exports = Evaluaciones;
