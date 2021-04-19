import React from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";

import { resetFilter } from "store/actions";

import WhiteButton from "components/WhiteButton";
import FormatFilter from "components/FilterForm/FormatFilter";
import ClassFilter from "components/FilterForm/ClassFilter";
import CardTypeFilter from "components/FilterForm/CardTypeFilter";
import KeywordFilter from "components/FilterForm/KeywordFilter";
import RarityFilter from "components/FilterForm/RarityFilter";
import MinionTypeFilter from "components/FilterForm/MinionTypeFilter";
import NumericFilters from "components/FilterForm/NumericFilters";
import Footer from "components/Footer";

import "./FilterForm.css";

const FilterForm = ({ metadata, resetFilter }) => {
  const isLoading = !metadata;

  if (isLoading) {
    return (
      <div className="FilterForm">
        {[...Array(10).keys()].map((i) => (
          <div key={i} style={{ marginTop: 10, marginBottom: 10 }}>
            <Skeleton height={60} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="FilterForm">
      <WhiteButton
        onClick={resetFilter}
        style={{ width: 120, marginLeft: 5, marginBottom: 10 }}
      >
        RESET FILTERS
      </WhiteButton>
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
};

const mapStateToProps = (state) => {
  return {
    metadata: state.data.metadata,
  };
};

export default connect(mapStateToProps, { resetFilter })(FilterForm);
