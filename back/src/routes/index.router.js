const { Router } = require("express");
const routerAlumn = require("./usuarios/allAlumn");
const router = Router();

router.use("/alumnos", routerAlumn);
module.exports = router;
