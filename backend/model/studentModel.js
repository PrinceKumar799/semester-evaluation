const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: String,
  UID: String,
  evaluated: Boolean,
  ideation: Number,
  execution: Number,
  viva: Number,
});
const Student = mongoose.model("student", studentSchema);
module.exports = { Student };
