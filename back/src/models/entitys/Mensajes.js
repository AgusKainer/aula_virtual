/*
remitente_id quien envia
destinatario_id quien reciba
contenido
fechaEnvio
 */
const { DataTypes } = require("sequelize");
const conectionDB = require("../../db/dbConection");
const Alumnos = require("./Alumnos");
const Profesor = require("./Profesor");
const Mensajes = conectionDB.define("Mensajes", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  remitente_id: {
    type: DataTypes.UUID,
    references: {
      model: Profesor,
      key: "id",
    },
  },
  destinatario_id: {
    type: DataTypes.UUID,
    references: {
      model: Alumnos,
      key: "id",
    },
  },
  contenido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaEnvio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Mensajes;
