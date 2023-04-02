import React, { useState } from "react";
import Evaluatedcard from "./Evaluatedcard";
import Form from "./Form";
import "./Filters.css";

const Filters = ({ students }) => {
  const [filterType, setFilterType] = useState("all");

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter-select" className="filter-label">
        Filter by:
      </label>
      <select
        id="filter-select"
        value={filterType}
        onChange={handleFilterChange}
        className="filter"
      >
        <option value="evaluated">Evaluated Students</option>
        <option value="unevaluated">Unevaluated Students</option>
      </select>
      {filterType === "evaluated" && (
        <div>
          <h2>Evaluated Students</h2>
          <Evaluatedcard></Evaluatedcard>
        </div>
      )}
      {filterType === "unevaluated" && (
        <div>
          <h2>Unevaluated Students</h2>
          <Form></Form>
        </div>
      )}
    </div>
  );
};

export default Filters;
