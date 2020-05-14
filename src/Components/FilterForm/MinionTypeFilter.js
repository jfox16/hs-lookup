import React, { useState, useEffect } from 'react';
import FilterFormDropdown from './FilterFormDropdown';
import FilterFormLabel from './FilterFormLabel';

function MinionTypeFilter(props) {
  const [selectedMinionType, setSelectedMinionType] = useState('');

  useEffect(() => {
    props.setFilterValue('minionType', selectedMinionType);
  }, [selectedMinionType]);

  const handleChange = (event) => {
    setSelectedMinionType(event.target.value);
  }

  if (!Array.isArray(props.minionTypes)) {
    return <></>
  }

  const options = [{label: 'Any', value: ''}];
  props.minionTypes.forEach(minionType => {
    options.push({label: minionType.name, value: minionType.slug})
  });

  return (
    <>
    <FilterFormLabel label='MINION TYPE' />
    <FilterFormDropdown options={options} onChange={handleChange} value={selectedMinionType} />
    </>
  );
}

export default MinionTypeFilter;