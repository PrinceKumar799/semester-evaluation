const { Student } = require("../model/studentModel");

const evaluateStudent = async (req, res) => {
  const uid = req.body.UID;
  try {
    const product = await Student.findOneAndUpdate(
      { UID: uid },
      { ...req.body, evaluated: true }
    );
    res.status(201).send(product);
  } catch {
    console.log(err);
    res.status(400).send(err);
  }
  console.log(req.body);
};

const getEvaluatedStudents = async (req, res) => {
  const docs = await Student.find({ evaluated: true });
  res.json(docs);
};

const addStudent = async (req, res) => {
  let student = new Student();
  student.name = req.body.name;
  student.UID = req.body.UID;
  student.evaluated = req.body.evaluated;
  student.ideation = req.body.ideation;
  student.execution = req.body.execution;
  student.viva = req.body.viva;
  const doc = await student.save();
  console.log(doc);
  res.json(doc);
};

const getUnevaluatedStudents = async (req, res) => {
  const docs = await Student.find({ evaluated: false });
  res.json(docs);
};
module.exports = {
  getEvaluatedStudents,
  evaluateStudent,
  addStudent,
  getUnevaluatedStudents,
};
