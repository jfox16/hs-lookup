import React, { useState, useEffect } from 'react';
import './FilterFormDropdown.css';

function FilterFormDropdown(props) {

  if (!Array.isArray(props.options)) {
    return <></>;
  }
  return (
    <select 
      className='FilterFormDropdown' 
      onChange={props.onChange}
      value={props.value}
      style={
        (props.value !== '')
        ?
        {backgroundColor: 'hsl(0, 0%, 28%)', color: 'snow'}
        :
        {}
      }
    >
      {props.options.map(option => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default FilterFormDropdown;