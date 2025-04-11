const { Alumnos } = require("../../../models/index.model");

const updateAlumnController = async ({ id, nombre, apellido, email }) => {
  const [update] = await Alumnos.update(
    { nombre, apellido, email },
    {
      where: { id },
    }
  );
  if (update) {
    const alumn = await Alumnos.findByPk(id);
    return alumn;
  } else {
    return null;
  }
};

module.exports = updateAlumnController;
