const { Router } = require("express");
const {
  allAdminHandler,
  createAdminHandler,
  idAdminHandler,
  deleteAdminHandler,
  updateAdminHandler,
} = require("../../handler/index.handler");

const routerAdmin = Router();

routerAdmin.get("/admin/:id", idAdminHandler);
routerAdmin.put("/update", updateAdminHandler);
routerAdmin.delete("/delete/:id", deleteAdminHandler);
routerAdmin.get("/todosadmin", allAdminHandler);
routerAdmin.post("/crearadmin", createAdminHandler);

module.exports = routerAdmin;
