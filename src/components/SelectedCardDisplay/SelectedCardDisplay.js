import React, { useEffect } from "react";

import "./SelectedCardDisplay.css";

const SelectedCardDisplay = ({ selectedCard }) => {

  useEffect(() => {
    // console.log("Selected card:", selectedCard.name, selectedCard);
  }, [ selectedCard ])

  return (
    <div className="SelectedCardDisplay">
      <img src={selectedCard.image} alt={selectedCard.name} />
    </div>
  );
};

export default SelectedCardDisplay;
