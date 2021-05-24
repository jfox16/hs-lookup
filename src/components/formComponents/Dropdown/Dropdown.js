import React from 'react'
import './Dropdown.css'
import { GoChevronDown } from 'react-icons/go'

function Dropdown({ value, onChange, options }) {
  if (!Array.isArray(options)) {
    return <></>
  }
  return (
    <div>
      <select
        className="Dropdown"
        onChange={onChange}
        value={value}
        style={{ opacity: !value || value === '' ? 0.5 : 1 }}
      >
        {options.map((option) => (
          <option
            value={option.value}
            key={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      <div className="DropdownChevronPositioner">
        <GoChevronDown />
      </div>
    </div>
  )
}

export default Dropdown
