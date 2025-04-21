const { Administrador } = require("../../../models/index.model");

const updateAdminController = async ({
  id,
  nombre,
  apellido,
  email,
  contraseña,
}) => {
  const [update] = await Administrador.update(
    { nombre, apellido, email, contraseña },
    { where: { id } }
  );
  if (!update) {
    const admin = await Administrador.findByPk(id);
    return admin;
  } else {
    return null;
  }
};

module.exports = updateAdminController;
