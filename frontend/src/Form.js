import Checkbox from "./Checkbox";
import "./Form.css";
import React, { useState, useEffect } from "react";
import "./Button.css";

function Form() {
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
    // Submit form logic here
    setIsSubmitted(true);
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
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {students.map((student) => (
          <Checkbox {...student} isCheckProp={handleCheckBoxCheck}></Checkbox>
        ))}

        {checkedCount >= 3 ? (
          checkedCount <= 4 ? (
            <button
              onSubmit={handleSubmit}
              type="submit"
              form="form1"
              value="Submit"
              className="Button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            console.log("choose 4 students maximum")
          )
        ) : (
          console.log("choose 3 students minumum")
        )}
      </form>
      {isSubmitted && (
        <div className="success">Form submitted successfully!</div>
      )}
    </>
  );
}

export default Form;
