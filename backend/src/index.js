const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database" + err);
  });

app.use("/auth", auth);
app.use("/auth", auth);

app.get("/", (_req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, () => {
  console.log("Backend server has started at" + process.env.PORT);
});
