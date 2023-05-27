const mongoose = require("mongoose");

const createData = new mongoose.Schema({
  name: String,
  currentClass: String,
  division: String,
});

module.exports = mongoose.model("collection1", createData);
