const router = require("express").Router();
const {
  addStudent,
  getEvaluatedStudents,
  evaluateStudent,
  getUnevaluatedStudents,
} = require("../controller/studentController");

router.get("/", (req, res) => {
  res.json(req.body);
});

router.post("/evaluate", addStudent);

router.get("/evaluated", getEvaluatedStudents);

router.get("/unevaluated", getUnevaluatedStudents);

router.patch("/evaluate", evaluateStudent);

module.exports = { router };
