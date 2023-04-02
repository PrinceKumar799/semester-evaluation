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
  return (
    <div className="evaluated">
      {students.map((student) => (
        <p>
          Student Name={student.name}
          <br></br>
          UID = {student.UID};
        </p>
      ))}
    </div>
  );
}

export default Evaluatedcard;
