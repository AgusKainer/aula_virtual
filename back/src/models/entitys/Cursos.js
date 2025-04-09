const { DataTypes } = require("sequelize");
const conectionDB = require("../../db/dbConection");
const Profesor = require("./Profesor");

const Cursos = conectionDB.define("Cursos", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  profesor_id: {
    type: DataTypes.UUID,
    references: {
      model: Profesor,
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
