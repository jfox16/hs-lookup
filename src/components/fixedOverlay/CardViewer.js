import React from 'react';
import './CardViewer.css';

const CardViewer = (props) => {

  const handleClick = () => {
    props.setOpen(false);
  }

  if (!props.open || !props.card) return <></>;

  return (
    <div className='CardViewer' onClick={handleClick}>
      <img className='CardViewerCard' src={props.card.image} alt={props.card.name} />
    </div>
  );
}

export default CardViewer;