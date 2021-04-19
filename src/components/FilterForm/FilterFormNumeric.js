import React from "react";
import "./FilterFormNumeric.css";

function FilterFormNumeric({ value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      className="FilterFormNumeric"
      onChange={handleChange}
      value={value || ""}
      style={{ opacity: !value ? 0.5 : 1 }}
      type="number"
      min={0}
      max={25}
    />
  );
}

export default FilterFormNumeric;
