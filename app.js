import express from "express";
import dotenv from "dotenv";
import dbConnection from "./db/dbConnectio.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

dbConnection();

app.listen(port, () => {
  console.log("Server Listen on Port " + port);
});
