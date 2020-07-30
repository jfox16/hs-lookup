import React from 'react';
import FilterFormLabel from './FilterFormLabel';
import FilterFormNumeric from './FilterFormNumeric';
import './NumericFilters.css';

function NumericFilters(props) {

  const handleChange = (event, stat) => {
    props.setFilterValue(stat, event.target.value);
  }

  return (
    <div className='NumericFilters'>
      <div>
        <FilterFormLabel label='Mana' />
        <FilterFormNumeric onChange={e => handleChange(e, 'manaCost')} />
      </div>
      <div>
        <FilterFormLabel label='Attack' />
        <FilterFormNumeric onChange={e => handleChange(e, 'attack')} />
      </div>
      <div>
        <FilterFormLabel label='Health' />
        <FilterFormNumeric onChange={e => handleChange(e, 'health')} />
      </div>
    </div>
  );
}

export default NumericFilters;