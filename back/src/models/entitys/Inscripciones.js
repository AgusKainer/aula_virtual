/*
alumno_id
curso_id
fechaInscripcion
estado(activo, finalizado, dado de baja)
*/
const { DataTypes } = require("sequelize");
const conectionDB = require("../../db/dbConection");

const Inscripciones = conectionDB.define("Inscripciones", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  alumno_id: {
    type: DataTypes.UUID,
    references: {
      model: "Alumnos",
      key: "id",
    },
  },
  curso_id: {
    type: DataTypes.UUID,
    references: {
      model: "Cursos",
      key: "id",
    },
  },
  fechaInscripcion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM("activo", "finalizado", "dado de baja"),
    allowNull: false,
  },
});

module.exports = Inscripciones;
