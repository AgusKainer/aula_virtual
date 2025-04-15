const { Profesor } = require("../../../models/index.model");

const profesorIdController = async ({ id }) => {
  return await Profesor.findByPk(id);
};

module.exports = profesorIdController;
