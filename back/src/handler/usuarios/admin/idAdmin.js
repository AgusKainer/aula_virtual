const { idAdminController } = require("../../../controller/index.controller");
const { notFoundError } = require("../../../utils/errors");

const idAdminHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const admin = await idAdminController({ id });
    if (!admin) {
      notFoundError("No se ecnuentra el admin", "NOT_FOUND_ADMIN_ID");
    }
    res.status(200).json(admin);
  } catch (error) {
    next(error);
  }
};

module.exports = idAdminHandler;
