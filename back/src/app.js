const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/index.router");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/aula", router);
app.use((err, req, res, next) => {
  const status = err.httpStatus || 500;
  const code = err.code || "INTERNAL_SERVER_ERROR";
  const message = err.message || "Ocurrió un error inesperado";

  res.status(status).json({
    error: {
      code,
      message,
    },
  });
});

module.exports = app;
