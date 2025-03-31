const { Sequelize } = require("sequelize");
require("dotenv").config();

const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME;

const conectionDB = new Sequelize(db_name, db_user, db_password, {
  host: "localhost",
  dialect: "postgres",
});

module.exports = conectionDB;
