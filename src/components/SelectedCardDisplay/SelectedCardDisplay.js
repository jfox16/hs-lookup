import React from 'react';

import './SelectedCardDisplay.css';

const SelectedCardDisplay = ({ selectedCard }) => {
  return (
    <div className="SelectedCardDisplay">
      <img src={selectedCard.image} alt={selectedCard.name} />
    </div>
  )
}

export default SelectedCardDisplay;