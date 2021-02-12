import React from 'react';

import './IconButton.css';



const IconButton = ({ children, onClick }) => {
  return (
    <button className="IconButton" onClick={onClick}>
      {children}
    </button>
  );
}



export default IconButton;