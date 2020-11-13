
import React, { useState, useEffect } from 'react';
import FilterFormLabel from './FilterFormLabel';
import './FormatFilter.css';



function FormatFilter(props) {

  const [format, setFormat] = useState('standard');

  useEffect(() => {
    props.setFilterValue('format', format);
  }, [format]);

  return (
    <>
    <FilterFormLabel label='Format' />
    <div className='FormatFilter'>
      <div 
        className='FormatFilterButton'
        onClick={() => setFormat('')} 
        style={
          (!format)
          ?
          {backgroundColor: 'hsl(0, 0%, 28%)', color: 'snow'}
          :
          {}
        }
      >
        Wild
      </div>
      <div 
        className='FormatFilterButton'
        onClick={() => setFormat('standard')} 
        style={
          (format === 'standard')
          ?
          {backgroundColor: 'hsl(0, 0%, 28%)', color: 'snow'}
          :
          {}
        }
      >
        Standard
      </div>
      <div 
        className='FormatFilterButton'
        onClick={() => setFormat('duels')} 
        style={
          (format === 'duels')
          ?
          {backgroundColor: 'hsl(0, 0%, 28%)', color: 'snow'}
          :
          {}
        }
      >
        Duels
      </div>
    </div>
    </>
  );
}

export default FormatFilter;