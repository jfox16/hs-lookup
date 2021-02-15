// IMPORT FROM PACKAGES
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
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
  
  const isLoading = (!filteredCards);

  useEffect(() => {
    setDisplayedCards([]);
    setCurrentIndex(0);
  }, [filteredCards]);

  if (filteredCards && filteredCards.length === 0) {
    return <div style={{textAlign: 'center', marginTop: 48}}>(No cards found. Try changing the filters.)</div>
  }

  // sort cards by manaCost
  const sortedCards = filteredCards && filteredCards.sort((a,b) => a.manaCost - b.manaCost);

  // loadMore() is called by InfiniteScroll to load more cards when the bottom of the page is reached.
  const loadMore = () => {
    const newIndex = currentIndex + ITEMS_PER_PAGE;
    if (sortedCards) setDisplayedCards(sortedCards.slice(0, newIndex));
    setCurrentIndex(newIndex);
  }

  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={sortedCards && currentIndex <= sortedCards.length-1}
        threshold={16}
      >
        <div className='CardImageDisplay'>
          {!isLoading ?
              displayedCards.map(card => (
              <div className='CardImageDisplayCardDiv' key={'card-image-' + card.id}>
                <img
                  className='CardImageDisplayCard'
                  src={card.image}
                  alt={card.name}
                  onClick={() => selectCard(card)}
                />
              </div>
            ))
            :
            [1,2,3,4,5,6,7,8,9,10].map(i => (
              <div className='CardImageDisplayCardDiv' key={i} style={{ margin: '8px' }}>
                <Skeleton height={250} />
              </div>
            ))
          }
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