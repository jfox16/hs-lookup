import React, { useState, useEffect } from 'react';
import FilterFormLabel from './FilterFormLabel';
import './SetFilter.css';

function SetFilter(props) {
  const [isStandard, setIsStandard] = useState(true);

  useEffect(() => {
    props.setFilterValue('isStandard', isStandard);
  }, [isStandard]);

  return (
    <>
    <FilterFormLabel label='Format' />
    <div className='SetFilter'>
      <div 
        className='SetFilterButton'
        onClick={() => setIsStandard(false)} 
        style={
          (!isStandard)
          ?
          {backgroundColor: 'hsl(0, 0%, 28%)', color: 'snow'}
          :
          {}
        }
      >
        Wild
      </div>
      <div 
        className='SetFilterButton'
        onClick={() => setIsStandard(true)} 
        style={
          (isStandard)
          ?
          {backgroundColor: 'hsl(0, 0%, 28%)', color: 'snow'}
          :
          {}
        }
      >
        Standard
      </div>
    </div>
    </>
  );
}

export default SetFilter;