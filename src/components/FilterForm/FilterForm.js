import React from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

import FormatFilter from 'components/FilterForm/FormatFilter';
import ClassFilter from 'components/FilterForm/ClassFilter';
import CardTypeFilter from 'components/FilterForm/CardTypeFilter';
import KeywordFilter from 'components/FilterForm/KeywordFilter';
import RarityFilter from 'components/FilterForm/RarityFilter';
import MinionTypeFilter from 'components/FilterForm/MinionTypeFilter';
import NumericFilters from 'components/FilterForm/NumericFilters';
import Footer from 'components/Footer';

import './FilterForm.css';



const FilterForm = ({ metadata }) => {

  const isLoading = !metadata;

  if (isLoading) {
    return (
      <div className="FilterForm">
        {[1,2,3,4,5,6,7,8].map(i => (
          <div key={i} style={{marginTop: 20}}>
            <Skeleton height={16} width={80} />
            <div style={{height: 6}} />
            <Skeleton height={40} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="FilterForm">
      <FormatFilter />
      <NumericFilters />
      <ClassFilter />
      <CardTypeFilter />
      <RarityFilter />
      <MinionTypeFilter />
      <KeywordFilter />
      <Footer />
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