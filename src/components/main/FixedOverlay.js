import React from 'react';
import './FixedOverlay.css';

import Header from 'components/fixedOverlay/Header';
import SlidingDrawerLeft from 'components/fixedOverlay/SlidingDrawerLeft';
import FilterForm from 'components/fixedOverlay/FilterForm';
import CardViewer from 'components/fixedOverlay/CardViewer';



const FixedOverlay = ({
  headerHeight,
  showSidebar,
  setShowSidebar,
  sidebarWidth
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
      <div className='CardViewerPositioner' style={{left: (showSidebar) ? sidebarWidth : 0}}>
        <CardViewer />
      </div>
    </div>
  );
}

export default FixedOverlay;