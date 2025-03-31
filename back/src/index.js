const app = require("./app");
const db = require("./db/dbConection");
require("dotenv").config();
const PORT = process.env.PORT;

const server = () => {
  try {
    app.listen(PORT);
    db.sync();
    console.log("Database connected successfully");

    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log("Error in server setup", error);
  }
};

server();
