import React, { useState, useEffect } from 'react';
import FilterFormLabel from './FilterFormLabel';
import FilterFormDropdown from './FilterFormDropdown';
import { descriptionTokens } from '../../modules/filterConstants';

function KeywordFilter(props) {
  const [selectedKeyword, setSelectedKeyword] = useState(props.value ? props.value : '');

  useEffect(() => {
    props.setFilterValue('keyword', selectedKeyword);
  }, [selectedKeyword]);

  const handleChange = (event) => {
    setSelectedKeyword(event.target.value);
  }

  if (!Array.isArray(props.keywords)) {
    return <></>
  }

  const options = [{label: 'Any', value: ''}];
  const filteredKeywords = props.keywords.filter((keyword) => descriptionTokens.keyword[keyword.slug]);
  const sortedKeywords = filteredKeywords.sort((a, b) => a.name > b.name);
  sortedKeywords.forEach(keyword => {
    if (descriptionTokens.keyword[keyword.slug]) {
      options.push({label: keyword.name, value: keyword.slug});
    }
  });

  return (
    <>
    <FilterFormLabel label='KEYWORD' />
    <FilterFormDropdown options={options} onChange={handleChange} value={selectedKeyword}/>
    </>
  );
}

export default KeywordFilter;