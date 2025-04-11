const {
  deleteAlumnController,
} = require("../../../controller/index.controller");
const { notFoundError } = require("../../../utils/errors");

const deleteAlumnHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const alumn = await deleteAlumnController({ id });
    if (!alumn) {
      notFoundError(
        "No se puede eliminar, ya que no existe ese alumno",
        "NOT_FOUND_DELETE_ALUMN"
      );
    }
    res.status(200).json({ message: "Se elimino el alumno", alumn: alumn });
  } catch (error) {
    next(error);
  }
};
module.exports = deleteAlumnHandler;
