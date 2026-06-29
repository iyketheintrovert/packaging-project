const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const env = process.env.NODE_ENV || "development";

dotenv.config({
  path: path.join(__dirname, `../config/${env}.env`)
});

const app = express();

app.get("/", (req, res) => {
  res.send({
    environment: process.env.APP_ENV,
    message: process.env.MESSAGE
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
  console.log(`Environment: ${process.env.APP_ENV}`);
});