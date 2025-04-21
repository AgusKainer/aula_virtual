const { Administrador } = require("../../../models/index.model");

const idAdminController = async ({ id }) => {
  return await Administrador.findByPk(id);
};

module.exports = idAdminController;
