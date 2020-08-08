import React, { useState } from 'react';
import SetFilter from '../FilterForm/SetFilter';
import ClassFilter from '../FilterForm/ClassFilter';
import CardTypeFilter from '../FilterForm/CardTypeFilter';
import KeywordFilter from '../FilterForm/KeywordFilter';
import RarityFilter from '../FilterForm/RarityFilter';
import MinionTypeFilter from '../FilterForm/MinionTypeFilter';
import NumericFilters from '../FilterForm/NumericFilters';
import './FilterForm.css';

import Loader from '../Loaders/Loader';

function FilterForm(props) {
  const [filters, setFilters] = useState({ isStandard: true, cardType: 'minion' });

  const setFilterValue = (key, value) => {
    let newFilters = {};
    Object.assign(newFilters, filters);
    newFilters[key] = value;
    setFilters(newFilters);
    props.setFilters(newFilters);
  }

  if (!props.metadata) {
    return <Loader text='Fetching metadata...'/>
  }

  if (props.metadata === 'error') {
    return <div>Something wrong!</div>
  }

  return (
    <div className="FilterForm" style={props.style}>
      <h2 style={{margin: '10px'}}>Filters</h2>

      <div><SetFilter setFilterValue={setFilterValue} /></div>
      <div><NumericFilters setFilterValue={setFilterValue} /></div>
      <div><ClassFilter classes={props.metadata.classes} setFilterValue={setFilterValue} /></div>
      <div><CardTypeFilter cardTypes={props.metadata.types} setFilterValue={setFilterValue} value={'minion'} /></div>
      <div><RarityFilter rarities={props.metadata.rarities} setFilterValue={setFilterValue} /></div>
      <div><MinionTypeFilter minionTypes={props.metadata.minionTypes} setFilterValue={setFilterValue} /></div>
      <div><KeywordFilter keywords={props.metadata.keywords} setFilterValue={setFilterValue} /></div>
    </div>
  );
}

export default FilterForm;