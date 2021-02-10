import React from 'react';
import { connect } from 'react-redux';

import FilterFormLabel from './FilterFormLabel';
import Dropdown from 'components/filterFormComponents/Dropdown';

import { descriptionTokens } from 'modules/filterConstants';
import { setFilterValue } from 'store/actions';



function KeywordFilter({ metadata, filter, setFilterValue }) {

  if (!Array.isArray(metadata.keywords)) {
    return <></>
  }

  const options = [{label: 'Any', value: ''}];
  const filteredKeywords = metadata.keywords.filter((keyword) => descriptionTokens.keyword[keyword.slug]);
  const sortedKeywords = filteredKeywords.sort((a, b) => a.name > b.name);
  sortedKeywords.forEach(keyword => {
    if (descriptionTokens.keyword[keyword.slug]) {
      options.push({label: keyword.name, value: keyword.slug});
    }
  });

  return (
    <div>
      <FilterFormLabel label='KEYWORD' />
      <Dropdown
        options={options}
        onChange={(e) => setFilterValue('keyword', e.target.value)}
        value={filter.keyword || ''}
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
)(KeywordFilter);