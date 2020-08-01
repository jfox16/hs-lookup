import React from 'react';
import './CardViewer.css';

const CardViewer = (props) => {

  if (!props.open || !props.card) return <></>;

  return (
    <div className='CardViewer' onClick={(e) => props.setOpen(false)}>
      <img className='CardViewerCard' src={props.card.image} alt={props.card.name} />
    </div>
  );
}

export default CardViewer;