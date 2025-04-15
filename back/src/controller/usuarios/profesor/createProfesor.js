const { Profesor } = require("../../../models/index.model");

const createPorfesorController = async ({
  nombre,
  apellido,
  email,
  contraseña,
  espacializacion,
}) => {
  return await Profesor.create({
    nombre,
    apellido,
    email,
    contraseña,
    espacializacion,
  });
};

module.exports = createPorfesorController;
