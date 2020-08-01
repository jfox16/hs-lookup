import React from 'react';
import './FilterFormDropdown.css';
import { GoChevronDown } from 'react-icons/go';

function FilterFormDropdown(props) {

  if (!Array.isArray(props.options)) {
    return <></>;
  }
  return (
    <div>
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
      <div className='FilterFormDropdownChevronPositioner'>
        <GoChevronDown />
      </div>
    </div>
  );
}

export default FilterFormDropdown;