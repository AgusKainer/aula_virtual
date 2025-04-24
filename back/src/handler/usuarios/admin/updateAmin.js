const {
  updateAdminController,
} = require("../../../controller/index.controller");
const { notFoundError } = require("../../../utils/errors");

const updateAdminHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, email, contraseña, espacializacion } = req.body;
    const admin = await creteAdminController({
      id,
      nombre,
      apellido,
      email,
      contraseña,
      espacializacion,
    });
    if (!admin) {
      notFoundError(
        "No se puede actualizar los datos",
        "NOT_FOUND_UPDATE_ADMIN"
      );
    }
    res.status(200).json({ message: "Datos actualizados", admin: admin });
  } catch (error) {
    next(error);
  }
};

module.exports = updateAdminHandler;
