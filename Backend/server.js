const express = require("express");
const dbConnect = require("./Database/index");

// const { PORT } = require("./config/index");
const PORT = 5000;
const app = express();

dbConnect();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World1" });
});

app.listen(PORT, console.log(`Backend is running on port: ${PORT}`));
