const express = require("express");
const app = express();
const userCreate = require("./modal/userModal");
const path = require("path");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/userDataBase")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/createuser", (req, res) => {
  userCreate
    .create({ username: req.body.username, password: req.body.password })
    .then((user) => {
      res.send(`${user.username} created successfully`);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3000, () => {
  console.log("Server is running");
});
