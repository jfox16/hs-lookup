import React from 'react';
import './FixedOverlay.css';

import Header from 'components/fixedOverlay/Header';
import SlidingDrawerLeft from 'components/fixedOverlay/SlidingDrawerLeft';
import FilterForm from 'components/fixedOverlay/FilterForm';
import CardViewer from 'components/fixedOverlay/CardViewer';



/**
 * 
 * @summary FixedOverlay shows a selected card on a darkened background. Appears when a card is selected.
 */
const FixedOverlay = ({
  defaultFilters,
  headerHeight,
  metadata,
  selectedCard,
  showCardViewer,
  showSidebar,
  setFilters,
  setShowCardViewer,
  setShowSidebar,
  sidebarWidth
}) => {
  return (
    <div className='FixedOverlay'>
      <Header
        style={{
          height: headerHeight,
          top: 0
        }}
      />
      <SlidingDrawerLeft
        open={showSidebar}
        setOpen={setShowSidebar}
        width={sidebarWidth}
        style={{paddingTop: headerHeight}}
      >
        <FilterForm
          metadata={metadata}
          defaultFilters={defaultFilters}
          setFilters={setFilters}
        />
      </SlidingDrawerLeft>
      {showCardViewer &&
        <div className='CardViewerPositioner' style={{left: (showSidebar) ? sidebarWidth : 0}}>
          <CardViewer
            card={selectedCard}
            open={showCardViewer}
            setOpen={setShowCardViewer}
          />
        </div>
      }
    </div>
  );
}

export default FixedOverlay;