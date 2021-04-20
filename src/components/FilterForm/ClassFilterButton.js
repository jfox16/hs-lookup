import React from "react";

function ClassFilterButton({
  hsClass,
  image,
  borderColor,
  selected,
  darkened,
  onClick,
}) {
  return (
    <div
      className="ClassFilterButton"
      onClick={onClick}
      style={{ opacity: darkened ? 0.4 : 1 }}
    >
      <img
        className="ClassFilterButtonIcon"
        alt={hsClass.name}
        src={image}
        style={{
          border: `3px solid ${borderColor}`,
          boxShadow: selected ? "0 0 3px 2px white" : "none",
        }}
      />
      <div className="ClassFilterButtonLabel">{hsClass.name}</div>
    </div>
  );
}

export default ClassFilterButton;
