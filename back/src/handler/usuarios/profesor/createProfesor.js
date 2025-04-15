const { json } = require("sequelize");
const {
  createPorfesorController,
} = require("../../../controller/index.controller");
const { notFoundError } = require("../../../utils/errors");

const createPrfesorHandler = async (req, res, next) => {
  try {
    const { nombre, apellido, email, contraseña, espacializacion } = req.body;
    const profesor = await createPorfesorController({
      nombre,
      apellido,
      email,
      contraseña,
      espacializacion,
    });
    if (!profesor) {
      notFoundError(
        "No se puede registrar el profesor",
        "NOT_FOUND_CREATE_PROFESOR"
      );
    }
    res.status(200).json(profesor);
  } catch (error) {
    next(error);
  }
};

module.exports = createPrfesorHandler;
