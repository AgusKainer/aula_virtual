const { Profesor } = require("../../../models/index.model");

const updateProfesorController = async ({
  id,
  nombre,
  apellido,
  email,
  contraseña,
  especializacion,
}) => {
  const [update] = await Profesor.update(
    {
      nombre,
      apellido,
      email,
      contraseña,
      especializacion,
    },
    { where: { id } }
  );
  if (update) {
    const profesor = await Profesor.findByPk(id);
    return profesor;
  } else {
    return null;
  }
};

module.exports = updateProfesorController;
