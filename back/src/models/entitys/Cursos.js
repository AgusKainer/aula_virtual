/*
nombre
descripcion
profesor_id
fechaInicio
fechaFin
*/

const { DataTypes } = require("sequelize");
const conectionDB = require("../db/dbConection");

const Cursos = conectionDB.define("Cursos", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  profeosr_id: {
    tyoe: DataTypes.UUID,
    references: {
      model: "Usuarios",
      key: "id",
    },
  },
  fechaInicio: {
    type: DataTypes.DATE,
  },
  fechaFin: {
    type: DataTypes.DATE,
  },
});

module.exports = Cursos;
