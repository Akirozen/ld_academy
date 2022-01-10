const express = require("express");
const cors = require("cors");

const DB = require("./database/database");
const todoRoutes = require("./routes");

const app = express();
DB();

app.use(express.json());
app.use(cors());

app.use("/api/v1", todoRoutes);

app.listen("5000", () => {
  console.log("Server connected port: 5000...");
});
