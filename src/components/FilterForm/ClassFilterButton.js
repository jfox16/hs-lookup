import React from 'react';

function ClassFilterButton(props) {
  return (
    <div className='ClassFilterButton' onClick={props.handleClick}>
      <div 
        className='ClassFilterButtonIcon' 
        style={{
          backgroundImage: `url('${props.image}'`, 
          border: `3px solid ${props.color}`,
          boxShadow: (props.selected) ? '0 0 3px 2px white' : 'none'
        }} 
      />
      <div className='ClassFilterButtonLabel' style={{color: (props.selected) ? 'snow' : 'hsl(0, 0%, 56%)'}}>
        {props.class.name}
      </div>
    </div>
  );
}

export default ClassFilterButton;