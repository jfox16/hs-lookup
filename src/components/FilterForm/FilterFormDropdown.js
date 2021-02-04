import React from 'react';
import './FilterFormDropdown.css';
import { GoChevronDown } from 'react-icons/go';

function FilterFormDropdown({ value, onChange, options }) {

  if (!Array.isArray(options)) {
    return <></>;
  }
  return (
    <div>
      <select 
        className='FilterFormDropdown' 
        onChange={onChange}
        value={value}
        style={{opacity: (!value || value === '') ? 0.5 : 1}}
      >
        {options.map(option => (
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