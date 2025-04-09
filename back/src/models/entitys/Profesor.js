const { Sequelize, DataTypes } = require("sequelize");
const conectionDB = require("../../db/dbConection");

const Profesor = conectionDB.define("Profesor", {
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
    defaultValue: "profesor",
  },
  fechaIngreso: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  especializacion: {
    type: DataTypes.STRING,
  },
});

module.exports = Profesor;
