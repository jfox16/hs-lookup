// IMPORT FROM PACKAGES
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

// IMPORT COMPONENTS
import Loader from 'components/Loaders/Loader';

// IMPORT FUNCTIONS
import { selectCard } from 'store/actions';

import './CardImageDisplay.css';

const ITEMS_PER_PAGE = 10;



const CardImageDisplay = ({ filteredCards, selectCard }) => {

  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ displayedCards, setDisplayedCards ] = useState([]);

  useEffect(() => {
    setDisplayedCards([]);
    setCurrentIndex(0);
  }, [filteredCards]);
  
  if (!filteredCards) {
    return <Loader text='Fetching card data...' />
  }

  if (filteredCards.length === 0) {
    return <div style={{textAlign: 'center', marginTop: 48}}>(No cards found. Try changing the filters.)</div>
  }

  // sort cards by manaCost
  const sortedCards = filteredCards.sort((a,b) => a.manaCost - b.manaCost);

  const loadMore = () => {
    const newIndex = currentIndex + ITEMS_PER_PAGE;
    setDisplayedCards(sortedCards.slice(0, newIndex));
    setCurrentIndex(newIndex);
  }

  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={currentIndex <= sortedCards.length-1}
        threshold={250}
      >
        <div className='CardImageDisplay'>
          {displayedCards.map(card => (
            <div className='CardImageDisplayCardDiv' key={'card-image-' + card.id}>
              <img
                className='CardImageDisplayCard'
                src={card.image}
                alt={card.name}
                onClick={() => selectCard(card)}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}



const mapStateToProps = state => {
  return {
    filteredCards: state.renderData.filteredCards
  };
};

export default connect(
  mapStateToProps,
  { selectCard }
)(CardImageDisplay);