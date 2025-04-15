const {
  createAlumnController,
} = require("../../../controller/index.controller");

const createAlumnHandler = async (req, res, next) => {
  const { nombre, email, password, rol } = req.body;

  try {
    const newAlumn = await createAlumnController({
      nombre,
      email,
      password,
      rol,
    });

    return res.status(201).json(newAlumn);
  } catch (error) {
    next(error);
  }
};

module.exports = createAlumnHandler;
