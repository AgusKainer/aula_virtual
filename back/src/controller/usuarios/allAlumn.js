const { Alumnos } = require("../../models/index.model");

const allAlumnController = async () => {
  return await Alumnos.findAll({
    where: {
      rol: "alumno",
    },
  });
};

module.exports = allAlumnController;
