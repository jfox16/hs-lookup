import React from 'react';

import './WhiteButton.css';

const WhiteButton = ({ children, onClick, style }) => {
  return (
    <button className='WhiteButton' onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default WhiteButton;