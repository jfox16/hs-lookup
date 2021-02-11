import React from 'react';
import { connect } from 'react-redux';

import { GoSettings } from 'react-icons/go';
import { CgClose } from 'react-icons/cg';

import { setFilterFormOpen } from 'store/actions';

import './FilterFormToggleButton.css';



const FilterFormToggleButton = ({ filterFormOpen, setFilterFormOpen }) => {
  return (
    <div className="FilterFormToggleButton" onClick={() => setFilterFormOpen(!filterFormOpen)}>
      { filterFormOpen ? <CgClose /> : <GoSettings /> }
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    filterFormOpen: state.renderData.filterFormOpen
  }
}

export default connect(
  mapStateToProps,
  {
    setFilterFormOpen
  }
)(FilterFormToggleButton);