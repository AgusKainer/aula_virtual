/* 
alumno_id
monto
metodoPago
fechaPago
estado(pendiente,completado,fallido)
*/
const { DataTypes } = require("sequelize");
const conectionDB = require("../../db/dbConection");

const Pagos = conectionDB.define("Pagos", {
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
  monto: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  metodoPago: {
    type: DataTypes.ENUM("tarjeta", "transferencia", "efectivo"),
    allowNull: false,
  },
  fechaPago: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM("pendiente", "completado", "fallido"),
    allowNull: false,
  },
});

module.exports = Pagos;
