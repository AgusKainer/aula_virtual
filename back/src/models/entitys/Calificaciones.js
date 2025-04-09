/*
evaluacione_id
alumno_id
nota
comentario
fechaCalifiacion
*/
const { DataTypes } = require("sequelize");
const conectionDB = require("../../db/dbConection");
const Alumnos = require("./Alumnos");
const Evaluaciones = require("./Evaluaciones");

const Calificaciones = conectionDB.define("Calificaciones", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  evaluacion_id: {
    type: DataTypes.UUID,
    references: {
      model: Evaluaciones,
      key: "id",
    },
  },
  alumno_id: {
    type: DataTypes.UUID,
    references: {
      model: Alumnos,
      key: "id",
    },
  },
  nota: {
    type: DataTypes.INTEGER,
  },
  comentario: {
    type: DataTypes.STRING,
  },
  fechaCalifiacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Calificaciones;
