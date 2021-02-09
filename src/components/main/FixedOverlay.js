import React from 'react';
import { connect } from 'react-redux';

import Header from 'components/fixedOverlay/Header';
import SlidingDrawerLeft from 'components/fixedOverlay/SlidingDrawerLeft';
import FilterForm from 'components/fixedOverlay/FilterForm';
import CardViewer from 'components/fixedOverlay/CardViewer';

import './FixedOverlay.css';



const FixedOverlay = ({
  headerHeight,
  showSidebar,
  setShowSidebar,
  sidebarWidth,
  selectedCard
}) => {
  return (
    <div className='FixedOverlay'>
      <Header
        style={{ height: headerHeight, top: 0 }}
      />
      <SlidingDrawerLeft
        open={showSidebar}
        setOpen={setShowSidebar}
        width={sidebarWidth}
        style={{paddingTop: headerHeight}}
      >
        <FilterForm />
      </SlidingDrawerLeft>
      {selectedCard && 
        <div className='CardViewerPositioner' style={{left: (showSidebar) ? sidebarWidth : 0}}>
          <CardViewer />
        </div>
      }
    </div>
  );
}



const mapStateToProps = state => {
  return {
    selectedCard: state.selectedCard,
  };
};

export default connect(
  mapStateToProps
)(FixedOverlay);