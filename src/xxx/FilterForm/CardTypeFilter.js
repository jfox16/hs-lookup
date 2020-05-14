import React, { useState, useEffect } from 'react';
import FilterFormLabel from './FilterFormLabel';
import FilterFormDropdown from './FilterFormDropdown';

function CardTypeFilter(props) {
  const [selectedCardType, setSelectedCardType] = useState(props.value);

  useEffect(() => {
    props.setFilterValue('cardType', selectedCardType);
  }, [selectedCardType]);

  const handleChange = (event) => {
    setSelectedCardType(event.target.value);
  }

  if (!Array.isArray(props.cardTypes)) {
    return <></>
  }

  const options = [{label: 'Any', value: ''}];
  props.cardTypes.forEach(cardType => {
    options.push({label: cardType.name, value: cardType.slug})
  });

  return (
    <>
    <FilterFormLabel label='CARD TYPE' />
    <FilterFormDropdown options={options} onChange={handleChange} value={selectedCardType}/>
    </>
  );
}

export default CardTypeFilter;