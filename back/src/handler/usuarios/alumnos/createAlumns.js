const {
  createAlumnController,
} = require("../../../controller/index.controller");

const createAlumnHandler = async (req, res) => {
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
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createAlumnHandler;
