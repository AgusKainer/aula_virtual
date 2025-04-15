const {
  profesorIdController,
} = require("../../../controller/index.controller");
const { notFoundError } = require("../../../utils/errors");

const profesorIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const profesor = await profesorIdController({ id });
    if (!profesor) {
      notFoundError("No se encuentra el profesor", "NOT_FOUND_PROFESOR_ID");
    }
    res.status(200).json(profesor);
  } catch (error) {
    next(error);
  }
};

module.exports = profesorIdHandler;
