import React, { useState, useEffect } from 'react';
import LazyLoad, { forceCheck } from 'react-lazyload';

import placeholder from '../../img/card-placeholder.png';
import Loader from '../Loaders/Loader';

import './CardImageDisplay.css';


function CardImageDisplay(props) {

  useEffect(() => {
    setInterval(function(){ forceCheck() }, 1000);
  });

  const sortCards = (cards) => {
    cards.sort((a,b) => a.manaCost - b.manaCost);
    return cards;
  }

  if (!props.cards) {
    return <Loader text='Fetching card data...' />
  }

  if (props.cards.length === 0) {
    return <div style={{textAlign: 'center'}}>No cards found, try changing the filter query.</div>
  }

  return (
    <div className='CardImageDisplay'>
      {sortCards(props.cards).map(card => (
        <div className='CardImageDisplayCardDiv' key={'card-image-' + card.id}>
          <LazyLoad height={200} placeholder={<img className='CardImageDisplayCard' src={placeholder} alt='placeholder' />}>
            <img className='CardImageDisplayCard' src={card.image} alt={card.name} />
          </LazyLoad>
        </div>
      ))}
    </div>
  )
}

export default CardImageDisplay;