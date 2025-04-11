const {
  updateAlumnController,
} = require("../../../controller/index.controller");
const { notFoundError } = require("../../../utils/errors");

const updateAlumnHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, email } = req.body;
    const alumn = await updateAlumnController({ id, nombre, apellido, email });
    if (!alumn) {
      notFoundError(
        "No se puede actualizar los datos, ya que el alumno no existe",
        "NOT_FOUND_UPDATE_ALUMN"
      );
    }
    res.status(200).json({ message: "Alumno actualizado", alumn: alumn });
  } catch (error) {
    next(error);
  }
};

module.exports = updateAlumnHandler;
