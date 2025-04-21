const { Administrador } = require("../../../models/index.model");

const creteAdminController = async ({
  nombre,
  apellido,
  email,
  contraseña,
}) => {
  return await Administrador.create({ nombre, apellido, email, contraseña });
};

module.exports = creteAdminController;
