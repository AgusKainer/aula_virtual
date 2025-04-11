const { alumnIdController } = require("../../../controller/index.controller");
const { notFoundError } = require("../../../utils/errors");

const alumnIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const alumn = await alumnIdController({ id });
    if (!alumn) {
      notFoundError("No se encuentra ese alumno", "NOT_FOUND-ALUMN_ID");
    }
    res.status(200).json(alumn);
  } catch (error) {
    next(error);
  }
};

module.exports = alumnIdHandler;
