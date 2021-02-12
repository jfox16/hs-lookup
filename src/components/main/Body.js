import React from 'react';
import CardImageDisplay from '../Body/CardImageDisplay';
import StatDisplay from '../Body/StatDisplay';

import './Body.css';

const Body = () => {
  
  return (
    <div className='Body'>
      <StatDisplay />
      <CardImageDisplay />
    </div>
  );
}

export default Body;