/*
curso_id
tipo(pdf, video, power point)
rutaArchivo
descripcion
*/

const { DataTypes } = require("sequelize");
const conectionDB = require("../../db/dbConection");

const MaterialEstudio = conectionDB.define("Materialestudio", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  curso_id: {
    type: DataTypes.UUID,
    references: {
      model: "Cursos",
      key: "id",
    },
  },
  tipo: {
    type: DataTypes.ENUM("pdf", "video", "power point", "rar"),
    allowNull: false,
  },
  rutaArchivo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = MaterialEstudio;
