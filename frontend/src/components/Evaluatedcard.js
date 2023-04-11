import "./Evaluatedcard.css";
import React, { useState, useEffect } from "react";
function Evaluatedcard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:8080/api/evaluated");
    const jsonData = await response.json();
    setStudents(jsonData);
  };

  const [studentData, setStudentData] = useState({});

  const handleClick = async (id) => {
    {
      studentData.viva = 0;
      studentData.execution = 0;
      studentData.ideation = 0;
      const response = await fetch("http://localhost:8080/api/unevaluate/id", {
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

  const [state, setState] = useState(0);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   students.map(async (student) => ,
  //     });
  //     const data = await response.json();
  //   });
  // };

  return (
    <div>
      <ol className="evaluated">
        <h2>Evaluated Students</h2>
        {students.map((student) => (
          <p>
            <li>
              Student Name: {student.name}
              <br></br>UID: {student.UID}
            </li>
            <ul>
              <li>Ideation: {student.ideation}</li>
              <li>Viva: {student.viva}</li>
              <li>Execution: {student.execution}</li>
            </ul>
            <button onClick={() => handleClick(student.UID)}>Unevaluate</button>
            <hr></hr>
          </p>
        ))}
      </ol>
    </div>
  );
}

export default Evaluatedcard;
