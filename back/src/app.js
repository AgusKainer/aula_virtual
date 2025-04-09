const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/index.router");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/aula", router);
module.exports = app;
