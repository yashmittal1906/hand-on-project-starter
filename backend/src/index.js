const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database" + err);
  });

app.get("/", (_req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, () => {
  console.log("Backend server has started at" + process.env.PORT);
});
