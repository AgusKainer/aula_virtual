const { Alumnos } = require("../../../models/index.model");

const alumnIdController = async ({ id }) => {
  return await Alumnos.findByPk(id);
};

module.exports = alumnIdController;
