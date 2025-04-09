const { Sequelize, DataTypes } = require("sequelize");
const conectionDB = require("../../db/dbConection");

const Administrador = conectionDB.define("Administrador", {
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
    defaultValue: "administrador",
  },
  fechaIngreso: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Administrador;
