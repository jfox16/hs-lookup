import React from 'react';

function FixedBackground(props) {
  return (
    <div className='StaticBackground' style={{
      position: 'fixed',
      left: 0,
      right: 0,
      zIndex: -1000,
      height: '100%',
      width: '100vw',
      backgroundImage: `url(${props.bgImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }} />
  );
}

export default FixedBackground;