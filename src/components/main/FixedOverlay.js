import React from 'react';
import './FixedOverlay.css';

import Header from '../fixedOverlay/Header';
import SlidingDrawerLeft from '../fixedOverlay/SlidingDrawerLeft';
import FilterForm from '../fixedOverlay/FilterForm';
import CardViewer from '../fixedOverlay/CardViewer';

const FixedOverlay = (props) => {
  return (
    <div className='FixedOverlay'>
      <Header style={{height: props.headerHeight}} />
      <SlidingDrawerLeft
        open={props.showSidebar}
        setOpen={props.setShowSidebar}
        width={props.sidebarWidth}
      >
        <FilterForm
          metadata={props.metadata}
          setFilters={props.setFilters}
        />
      </SlidingDrawerLeft>
      {props.showCardViewer &&
        <div className='CardViewerPositioner' style={{left: (props.showSidebar) ? props.sidebarWidth : 0}}>
          <CardViewer
            card={props.selectedCard}
            open={props.showCardViewer}
            setOpen={props.setShowCardViewer}
          />
        </div>
      }
    </div>
  );
}

export default FixedOverlay;