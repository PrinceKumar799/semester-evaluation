const router = require("express").Router();
const {
  addStudent,
  getEvaluatedStudents,
  evaluateStudent,
  getUnevaluatedStudents,
  unevaluateStudent,
} = require("../controller/studentController");

router.get("/", (req, res) => {
  res.json(req.body);
});

router.post("/addStudent", addStudent);

router.get("/evaluated", getEvaluatedStudents);

router.get("/unevaluated", getUnevaluatedStudents);

router.patch("/evaluate", evaluateStudent);

router.patch("/unevaluate", unevaluateStudent);

module.exports = { router };
