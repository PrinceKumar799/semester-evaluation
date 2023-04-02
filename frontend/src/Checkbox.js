import { useState } from "react";
import "./Checkbox.css";
function Checkbox({ name, UID, evaluated, isCheckProp }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    if (isChecked) {
      console.log("increase");
    } else {
      console.log("decrease");
    }
    isCheckProp(e.target.checked);
  };

  const [studentData, setStudentData] = useState({});

  const handleIdeationInputChange = (event) => {
    const newData = { ...studentData, UID: UID, ideation: event.target.value };
    setStudentData(newData);
  };

  const handleExecutionInputChange = (event) => {
    const newData = { ...studentData, UID: UID, execution: event.target.value };
    setStudentData(newData);
  };

  const handleVivaInputChange = (event) => {
    const newData = { ...studentData, UID: UID, viva: event.target.value };
    setStudentData(newData);
  };

  const addMarks = async (e) => {
    e.preventDefault();
    if (window.confirm("Save Changes") === true) {
      studentData.evaluationStatus = true;
      const response = await fetch("http://localhost:8080/api/evaluate", {
        method: "PATCH",
        body: JSON.stringify(studentData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      window.alert(`Sucessfully added`);
    }
  };
  return (
    <div>
      <div className="checkbox">
        <span>
          {name}({UID})
        </span>
        <input onChange={handleChange} type="checkbox" />
      </div>

      {isChecked && (
        <div>
          <label>
            <span>Ideation </span>
            <input
              onChange={(event) => handleIdeationInputChange(event)}
              type="text"
              name="field1"
              required
            />
          </label>
          <br></br>
          <label>
            <span>Execution</span>
            <input
              onChange={(event) => handleExecutionInputChange(event)}
              type="text"
              name="field2"
              required
            />
          </label>
          <br></br>
          <label>
            <span>Viva/Pitch</span>
            <input
              onChange={(event) => handleVivaInputChange(event)}
              type="text"
              name="field3"
              required
            />
          </label>
          <br></br>
          <button onClick={addMarks}>Add</button>
        </div>
      )}
    </div>
  );
}

export default Checkbox;
