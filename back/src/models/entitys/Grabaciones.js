/*
clase_id
urlGrabacion
fechaSubida
*/

const { DataTypes } = require("sequelize");
const conectionDB = require("../../db/dbConection");
const Clases = require("./Clases");

const Grabaciones = conectionDB.define("Grabaciones", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  clase_id: {
    type: DataTypes.UUID,
    references: {
      model: Clases,
      key: "id",
    },
  },
  urlGrabacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaSubida: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Grabaciones;
