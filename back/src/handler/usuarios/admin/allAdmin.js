const { allAdminController } = require("../../../controller/index.controller");
const { notFoundError } = require("../../../utils/errors");

const allAdminHandler = async (req, res, next) => {
  try {
    const admin = await allAdminController();
    if (admin.length === 0) {
      notFoundError("No hay ningun admin registrado", "NOT_FOUND_ADMIN");
    }
    res.status(200).json(admin);
  } catch (error) {
    next(error);
  }
};

module.exports = allAdminHandler;
