const { allAlumnController } = require("../../../controller/index.controller");
const { notFoundError } = require("../../../utils/errors");

const allAlumnHandler = async (req, res, next) => {
  try {
    const alumn = await allAlumnController();
    if (alumn.length === 0)
      notFoundError("No se encontraron alumnos", "NOT_FOUND_ALUMN");
    res.status(200).json(alumn);
  } catch (error) {
    next(error);
  }
};

module.exports = allAlumnHandler;
