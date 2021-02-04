
import React from 'react';
import { connect } from 'react-redux';
import { setFilterValue } from 'store/actions';

import FilterFormLabel from './FilterFormLabel';
import './FormatFilter.css';



function FormatFilter({ format, setFormat }) {

  return (
    <>
    <FilterFormLabel label='Format' />
    <div className='FormatFilter'>
      <div
        className='FormatFilterButton'
        onClick={() => setFormat('wild')} 
        style={
          (!format || format === 'wild')
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

const mapStateToProps = state => {
  return {
    format: state.filter.format
  };
};

export default connect(
  mapStateToProps,
  { setFormat: (format) => setFilterValue('format', format) }
)(FormatFilter);