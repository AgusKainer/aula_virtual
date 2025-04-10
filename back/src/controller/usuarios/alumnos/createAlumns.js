const { Alumnos } = require("../../../models/index.model");

const createAlumnController = async ({ nombre, email, password, rol }) => {
  return await Alumnos.create({
    nombre,
    email,
    password,
    rol,
  });
};

module.exports = createAlumnController;
