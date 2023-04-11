import React, { useState } from "react";
import Evaluatedcard from "./Evaluatedcard";
import Form from "./Form";
import "./Filters.css";

const Filters = () => {
  const [filterType, setFilterType] = useState("unevaluated");

  const handleFilterChange = (event) => {
    event.preventDefault();
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
          <Evaluatedcard></Evaluatedcard>
        </div>
      )}
      {filterType === "unevaluated" && (
        <div>
          <Form></Form>
        </div>
      )}
    </div>
  );
};

export default Filters;
