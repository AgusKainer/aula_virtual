const { Profesor } = require("../../../models/index.model");

const allProfesorController = async () => {
  return await Profesor.findAll({
    where: {
      rol: "profesor",
    },
  });
};

module.exports = allProfesorController;
