import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Dropdown from 'components/formComponents/Dropdown';
import FilterFormLabel from './FilterFormLabel';

import { setFilterValue } from 'store/actions';



function MinionTypeFilter({ metadata, filter, setFilterValue }) {

  const [ options, setOptions ] = useState([]);

  useEffect(() => {
    if (metadata.minionTypes) {
      const newOptions = metadata.minionTypes
        .sort((a, b) => a.name < b.name)
        .map(minionType => (
          { label: minionType.name, value: minionType.slug }
        ));
      newOptions.unshift( {label: 'Any', value: ''} );
      setOptions(newOptions);
    }
  }, [ metadata ]);

  return (
    <div>
      <FilterFormLabel label='MINION TYPE' />
      <Dropdown
        options={options}
        onChange={(e) => setFilterValue('minionType', e.target.value)}
        value={filter.minionType || ''}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    metadata: state.data.metadata,
    filter: state.filter
  };
};

export default connect(
  mapStateToProps,
  { setFilterValue }
)(MinionTypeFilter);