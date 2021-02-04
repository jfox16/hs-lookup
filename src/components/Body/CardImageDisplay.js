import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LazyLoad, { forceCheck } from 'react-lazyload';

import placeholder from 'img/card-placeholder.png';
import Loader from 'components/Loaders/Loader';

import { selectCard } from 'store/actions';

import './CardImageDisplay.css';



const CardImageDisplay = ({ filteredCards, selectCard }) => {

  useEffect(() => {
    // Check every second for LazyLoad
    setInterval(function(){ forceCheck() }, 1000);
  });

  // sort cards by manaCost
  const sortedCards = filteredCards.sort((a,b) => a.manaCost - b.manaCost);

  if (!filteredCards) {
    return <Loader text='Fetching card data...' />
  }

  if (filteredCards.length === 0) {
    return <div style={{textAlign: 'center', marginTop: 48}}>(No cards found. Try changing the filters.)</div>
  }

  const cardPlaceholder = <img className='CardImageDisplayCard' src={placeholder} alt='placeholder' />;

  return (
    <div className='CardImageDisplay'>
      {sortedCards.map(card => (
        <div className='CardImageDisplayCardDiv' key={'card-image-' + card.id}>
          <LazyLoad height={200} placeholder={cardPlaceholder}>
            <img className='CardImageDisplayCard' src={card.image} alt={card.name} onClick={() => selectCard(card)} />
          </LazyLoad>
        </div>
      ))}
    </div>
  )
}



const mapStateToProps = state => {
  return {
    filteredCards: state.filteredCards,
  };
};

export default connect(
  mapStateToProps,
  { selectCard }
)(CardImageDisplay);