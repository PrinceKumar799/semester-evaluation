import Checkbox from "./Checkbox";
import "./Form.css";
import React, { useState, useEffect } from "react";

function Form() {
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckBoxCheck = (isChecked) => {
    if (isChecked) {
      setCheckedCount(checkedCount + 1); // Increment the count when a checkbox is checked
    } else {
      setCheckedCount(checkedCount - 1); // Decrement the count when a checkbox is unchecked
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkedCount === 3 || checkedCount === 4) {
      // Submit the form
      console.log("Form submitted!");
    } else {
      // Don't submit the form and show an error message
      alert("choose minimum 3 and maximum 4 students");
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
  return (
    <div className="form">
      {students.map((student) => (
        //test

        //test

        <Checkbox
          // name={student.name}
          // UID={student.UID}
          // evaluated={student.evaluated}
          {...student}
          isCheckProp={handleCheckBoxCheck}
        ></Checkbox>
      ))}
      <button onSubmit={handleSubmit} type="submit" value="Submit"></button>
      {checkedCount >= 3 ? (
        checkedCount <= 4 ? (
          <button type="submit" form="form1" value="Submit">
            Submit
          </button>
        ) : (
          console.log("choose 4 students maximum")
        )
      ) : (
        console.log("choose 3 students minumum")
      )}
    </div>
  );
}

export default Form;
