const { Administrador } = require("../../../models/index.model");

const deleteAdminController = async ({ id }) => {
  const admin = await Administrador.findByPk(id);
  if (!admin) return null;
  await admin.destroy();
  return admin;
};

module.exports = deleteAdminController;
