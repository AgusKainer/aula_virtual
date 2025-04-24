const {
  deleteAdminController,
} = require("../../../controller/index.controller");
const { notFoundError } = require("../../../utils/errors");

const deleteAdminHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const admin = await deleteAdminController({ id });
    if (!admin) {
      notFoundError(
        "No se puede eliminar, ya que no existe ese admin",
        "NOT_FOUND_DELETE_ADMIN"
      );
    }
    res.status(200).json({ message: "Se elimino el admin", admin: admin });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteAdminHandler;
