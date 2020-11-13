import React from 'react';
import CardImageDisplay from '../Body/CardImageDisplay';
import StatDisplay from '../Body/StatDisplay';

import './Body.css';

function Body(props) {
  
  return (
    <div className='Body'>
      <div className='BodyTopSpacer' style={{height: props.topOffset}}/>

      <div className='BodyRow'>
        <div className='BodyLeftSpacer' style={{width: props.leftOffset}} />
        <div className='BodyCardDisplayContainer'>
          <StatDisplay
            cards={props.filteredCards}
            metadata={props.metadata}
            filterDescription={props.filterDescription}
          />
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