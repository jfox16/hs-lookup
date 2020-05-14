import React, { useState, useEffect } from 'react';
import './FilterFormNumeric.css';

function FilterFormNumeric(props) {

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event);
  }

  return (
    <input
      className='FilterFormNumeric'
      onChange={handleChange}
      style={
        (value !== '')
        ?
        {backgroundColor: 'hsl(0, 0%, 28%)', color: 'snow'}
        :
        {}
      }
    />
  );
}

export default FilterFormNumeric;