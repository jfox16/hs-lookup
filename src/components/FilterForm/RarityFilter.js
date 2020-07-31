import React, { useState, useEffect } from 'react';
import FilterFormLabel from './FilterFormLabel';
import FilterFormDropdown from './FilterFormDropdown';

function RarityFilter(props) {
  const [selectedRarity, setSelectedRarity] = useState(props.value ? props.value : '');

  useEffect(() => {
    props.setFilterValue('rarity', selectedRarity);
  }, [selectedRarity]);

  const handleChange = (event) => {
    setSelectedRarity(event.target.value);
  }

  if (!Array.isArray(props.rarities)) {
    return <></>
  }

  const options = [{label: 'Any', value: ''}];
  props.rarities.forEach(rarity => {
    options.push({label: rarity.name, value: rarity.slug})
  });

  return (
    <>
    <FilterFormLabel label='RARITY' />
    <FilterFormDropdown options={options} onChange={handleChange} value={selectedRarity}/>
    </>
  );
}

export default RarityFilter;