const {
  updateProfesorController,
} = require("../../../controller/index.controller");
const { notFoundError } = require("../../../utils/errors");
const updateProfesorHandler = async (req, res, next) => {
  try {
    const { nombre, apellido, email, contraseña, espacializacion } = req.body;
    const { id } = req.params;
    const profesor = await updateProfesorController({
      id,
      nombre,
      apellido,
      email,
      contraseña,
      espacializacion,
    });
    if (!profesor) {
      notFoundError("No se puede actualizar,", "NOT_FOUND_UPDATE_PROFESOR");
    }
    res.status(200).json({ message: "Datos actualizados", profesor: profesor });
  } catch (error) {
    next(error);
  }
};
module.exports = updateProfesorHandler;
