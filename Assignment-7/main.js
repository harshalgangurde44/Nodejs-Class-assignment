const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bluePrint = require("./model/userModel");
const studentData = require("./initialData");

mongoose
  .connect("mongodb://localhost/studentData")
  .then(() => {
    console.log("Mongoose connected to Data Base");
  })
  .catch((err) => {
    console.log("Failed to connect...");
  });

app.listen(3006, () => {
  console.log("Server running at 3006 portal");
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("You are on home page");
});

app.get("/api/student", (req, res) => {
  res.json(studentData);
});

app.get("/api/student/:id", (req, res) => {
  const student = studentData.find((student) => student.id == req.params.id);
  if (student) {
    res.json(student);
  } else {
    res.send("Error 404 not found");
  }
});

app.post("/api/student", (req, res) => {
  if (req.body.name && req.body.currentClass && req.body.division) {
    bluePrint
      .create({
        id: req.body.id,
        name: req.body.name,
        currentClass: req.body.currentClass,
        division: req.body.division,
      })
      .then((data) => {
        res.send(`${data}`);
      })
      .catch((err) => {
        res.send("err");
      });
  } else {
    res.status(400).send("Failed to check");
  }
});

app.put("/api/student/:id", (req, res) => {
  let id = req.params.id;
  bluePrint
    .findByIdAndUpdate(id, req.body)
    .then((data) => {
      res.send(`Data updated succesfully`);
    })
    .catch((err) => {
      res.send(`Data error`);
    });
});

app.delete("/api/student/:id", (req, res) => {
  let id = req.params.id;
  bluePrint
    .findByIdAndDelete(id, req.body)
    .then((data) => {
      res.send(`Data with id ${id} been deleted `);
    })
    .catch((err) => {
      res.send("Error");
    });
});
