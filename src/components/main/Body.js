import React from 'react';
import CardImageDisplay from '../Body/CardImageDisplay';
import StatDisplay from '../Body/StatDisplay';
import GoogleAd from '../ads/GoogleAd';

import './Body.css';

function Body(props) {
  
  return (
    <div className='Body'>
      <div className='BodyTopSpacer' style={{height: props.topOffset}}/>
      {/* <SlidingDrawerLeft className='BodyLeft' width='380px'>
        <FilterForm metadata={metadata} setFilters={setFilters} />
      </SlidingDrawerLeft>
      <div className='BodyRight'>
        <CardViewer card={selectedCard} open={cardViewerOpen} setOpen={setCardViewerOpen} />
        <StatDisplay cards={filteredCards} metadata={metadata} filterDescription={filterDescription} />
        <GoogleAd />
        <CardImageDisplay cards={filteredCards} handleCardClick={handleCardClick} /> 
      </div> */}

      <div className='BodyRow'>
        <div className='BodyLeftSpacer' style={{width: props.leftOffset}} />
        <div className='BodyCardDisplayContainer'>
          <StatDisplay
            cards={props.filteredCards}
            metadata={props.metadata}
            filterDescription={props.filterDescription}
          />
          {/* <GoogleAd /> */}
          <CardImageDisplay
            cards={props.filteredCards}
            handleCardClick={props.handleCardClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;