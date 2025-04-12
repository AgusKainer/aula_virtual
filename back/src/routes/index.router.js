const { Router } = require("express");
const routerAlumn = require("./usuarios/allAlumn");
const routerProfesor = require("./usuarios/profesor");
const routerAdmin = require("./usuarios/admin");
const router = Router();

router.use("/alumnos", routerAlumn);
// PROFESORES
router.use("/profesores", routerProfesor);
//ADMIN
router.use("/admin", routerAdmin);

module.exports = router;
