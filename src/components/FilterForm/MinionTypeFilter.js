import React from 'react';
import { connect } from 'react-redux';

import Dropdown from 'components/formComponents/Dropdown';
import FilterFormLabel from './FilterFormLabel';

import { setFilterValue } from 'store/actions';



function MinionTypeFilter({ metadata, filter, setFilterValue }) {

  const options = [{label: 'Any', value: ''}];
  metadata.minionTypes && metadata.minionTypes.forEach(minionType => {
    options.push({label: minionType.name, value: minionType.slug})
  });

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