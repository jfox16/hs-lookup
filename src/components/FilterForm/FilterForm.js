import React from 'react';
import { connect } from 'react-redux';

import FormatFilter from 'components/FilterForm/FormatFilter';
import ClassFilter from 'components/FilterForm/ClassFilter';
import CardTypeFilter from 'components/FilterForm/CardTypeFilter';
import KeywordFilter from 'components/FilterForm/KeywordFilter';
import RarityFilter from 'components/FilterForm/RarityFilter';
import MinionTypeFilter from 'components/FilterForm/MinionTypeFilter';
import NumericFilters from 'components/FilterForm/NumericFilters';
import Loader from 'components/Loaders/Loader';

import './FilterForm.css';



const FilterForm = ({ metadata }) => {

  if (!metadata) {
    return <Loader text='Fetching metadata...'/>
  }

  return (
    <div className="FilterForm">
      {/* <h2 style={{margin: '4px'}}>Filters</h2> */}
      <FormatFilter />
      <NumericFilters />
      <ClassFilter />
      <CardTypeFilter />
      <RarityFilter />
      <MinionTypeFilter />
      <KeywordFilter />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    metadata: state.data.metadata,
  };
};

export default connect(
  mapStateToProps,
)(FilterForm);