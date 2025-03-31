/*
remitente_id quien envia
destinatario_id quien reciba
contenido
fechaEnvio
 */
const { DataTypes } = require("sequelize");
const conectionDB = require("../../db/dbConection");

const Mensajes = conectionDB.define("Mensajes", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  remitente_id: {
    type: DataTypes.UUID,
    references: {
      model: "Usuarios",
      key: "id",
    },
  },
  destinatario_id: {
    type: DataTypes.UUID,
    references: {
      model: "Usuarios",
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
