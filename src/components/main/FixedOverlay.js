import React from 'react';
import { connect } from 'react-redux';

import Header from 'components/fixedOverlay/Header';
import FilterForm from 'components/FilterForm';
import CardViewer from 'components/fixedOverlay/CardViewer';

import './FixedOverlay.css';

import { DESKTOP_HEADER_HEIGHT, SIDEBAR_WIDTH } from 'globalConstants';



const FixedOverlay = ({
  showSidebar,
  setShowSidebar,
  selectedCard
}) => {
  return (
    <div className='FixedOverlay'>
      <Header
        style={{ height: DESKTOP_HEADER_HEIGHT, top: 0 }}
      />
      <div style={{width: SIDEBAR_WIDTH, paddingTop: DESKTOP_HEADER_HEIGHT}}>
        <FilterForm />
      </div>
      {selectedCard && 
        <div className='CardViewerPositioner' style={{left: (showSidebar) ? SIDEBAR_WIDTH : 0}}>
          <CardViewer />
        </div>
      }
    </div>
  );
}



const mapStateToProps = state => {
  return {
    selectedCard: state.renderData.selectedCard,
  };
};

export default connect(
  mapStateToProps
)(FixedOverlay);