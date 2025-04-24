const { Administrador } = require("./../../../models/index.model");

const allAdminController = async () => {
  return await Administrador.findAll();
};

module.exports = allAdminController;
