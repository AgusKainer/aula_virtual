const { allAlumnController } = require("../../controller/index.controller");

const allAlumnHandler = async (req, res) => {
  try {
    const alumn = await allAlumnController();
    if (alumn.length === 0)
      return res
        .status(404)
        .json({ message: "NO HAY ALUMNOS EN LA BASE DE DATOS" });
    res.status(200).json(alumn);
  } catch (error) {
    res.status(500).json({ message: `ERROR AL TRAER ALUMNOS: ${error}` });
  }
};

module.exports = allAlumnHandler;
