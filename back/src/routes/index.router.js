const { Router } = require("express");
const routerAlumn = require("./usuarios/allAlumn");
const routerProfesor = require("./usuarios/profesor");
const router = Router();

router.use("/alumnos", routerAlumn);
// PROFESORES
router.use("/profesores", routerProfesor);
module.exports = router;
