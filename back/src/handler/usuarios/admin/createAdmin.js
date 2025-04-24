const {
  creteAdminController,
} = require("../../../controller/index.controller");
const { notFoundError } = require("../../../utils/errors");

const createAdminHandler = async (req, res, next) => {
  try {
    const { nombre, apellido, email, contraseña, espacializacion } = req.body;
    const admin = await creteAdminController({
      nombre,
      apellido,
      email,
      contraseña,
      espacializacion,
    });
    if (!admin) {
      notFoundError("No se puede crear al admin", "NOT_FOUND_CREATE_ADMIN");
    }
    res.status(200).json({ message: "Admin creado", admin: admin });
  } catch (error) {
    next(error);
  }
};
module.exports = createAdminHandler;
