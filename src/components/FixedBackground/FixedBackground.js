import React from 'react'

import './FixedBackground.css'

const FixedBackground = ({ backgroundImage }) => {
  return (
    <div
      className="FixedBackground fullscreen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  )
}

export default FixedBackground
