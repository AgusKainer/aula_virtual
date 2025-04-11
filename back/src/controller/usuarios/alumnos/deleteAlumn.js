const { Alumnos } = require("../../../models/index.model");

const deleteAlumnController = async ({ id }) => {
  const alumno = await Alumnos.findByPk(id);
  if (!alumno) return null;
  await alumno.destroy();
  return alumno;
};

module.exports = deleteAlumnController;
