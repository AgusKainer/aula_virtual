const {
  allProfesorController,
} = require("../../../controller/index.controller");
const { notFoundError } = require("../../../utils/errors");

const allProfesorHandler = async (req, res, next) => {
  try {
    const profe = await allProfesorController();
    if (profe.length === 0)
      notFoundError("No se encontraron profesores", "NOT_FOUND_PROFESOR");
    res.status(200).json(profe);
  } catch (error) {
    next(error);
  }
};

module.exports = allProfesorHandler;
