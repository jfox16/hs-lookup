import React from 'react'

import './IconButton.css'

const IconButton = ({ children, onClick, style }) => {
  return (
    <button className="IconButton" onClick={onClick} style={style}>
      {children}
    </button>
  )
}

export default IconButton
