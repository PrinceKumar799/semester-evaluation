import Checkbox from "./Checkbox";
import "./Form.css";
import React, { useState, useEffect } from "react";

function Form(props) {
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckBoxCheck = (isChecked) => {
    if (isChecked) {
      setCheckedCount(checkedCount + 1); // Increment the count when a checkbox is checked
    } else {
      setCheckedCount(checkedCount - 1); // Decrement the count when a checkbox is unchecked
    }
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkedCount < 3) {
      window.alert("Mark atleast 3 students for evaluation");
    } else {
      if (checkedCount > 4)
        window.alert("Maximum 4 students can be marked for evalaution");
      else setIsSubmitted(true);
    }
  };

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:8080/api/unevaluated");
    const jsonData = await response.json();
    setStudents(jsonData);
  };

  let content = (
    <>
      <h2>Unevaluated Students</h2>
      <form className="form" onSubmit={handleSubmit}>
        {students.map((student) => (
          <Checkbox {...student} isCheckProp={handleCheckBoxCheck}></Checkbox>
        ))}
        <button type="submit" value="Submit" className="submit-button">
          Submit
        </button>
      </form>
    </>
  );
  if (isSubmitted) {
    content = <div className="success">Evaluation successfully!</div>;
  }

  return <>{content}</>;
}

export default Form;
