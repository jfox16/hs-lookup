import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withResizeDetector } from 'react-resize-detector';

//IMPORT COMPONENTS
import FixedBackground from 'components/main/FixedBackground';
import FixedOverlay from 'components/main/FixedOverlay';
import Body from 'components/main/Body';

//IMPORT FUNCTIONS
import { filterCardData } from 'modules/hearthstone-card-filter';
import { generateTables } from 'functions/dataGeneration';
import { setData, setFilter, setFilteredCards } from 'store/actions';
import fetchData from 'functions/fetchData';

//IMPORT ASSETS
import bgImage from 'img/bg/darkmoon-races-bg.png';

// IMPORT CONSTANTS
import { SERVER_URL, DEBOUNCE_DELAY } from 'globalConstants';
import { useAsyncMemo } from 'use-async-memo';



// Main ================================================================================================================

const Main = ({ data, setData, filter, setFilter, setFilteredCards }) => {

  // data
  const [region] = useState('us');
  const [locale] = useState('en_US');

  // layout
  const [showSidebar, setShowSidebar] = useState(true);
  const isMobile = window.innerWidth <= 700 || window.innerHeight <= 500;
  const headerHeight = (!isMobile) ? 50 : 30;
  const sidebarWidth = (!isMobile) ? 380 : '100%';
  const topOffset = headerHeight;
  const leftOffset = (isMobile || !showSidebar) ? 0 : sidebarWidth;

  let defaultFilter = {
    format: 'standard',
    cardType: 'minion'
  };

  // When app starts, set initial filterValues
  useEffect(() => {
    setFilter(defaultFilter);
  }, []);

  // When region or locale changes, fetch new metadata and card data
  useEffect(() => {
    if (region && locale) {
      fetchData(SERVER_URL, region, locale)
        .then(data => setData(data));
    }
  }, [ region, locale ]);

  // When data or filters change, filter card data
  const newFilteredCards = useAsyncMemo(async () => {
    if (data && filter) {
      await new Promise(resolve => setTimeout(resolve, DEBOUNCE_DELAY)); // await this amount of seconds
      return await filterCardData(data.metadata, data.cardData, filter);
    }
  }, [ data, filter ]);

  // Put newfilteredCards in the redux store
  useEffect(() => {
    if (Array.isArray(newFilteredCards)) {
      setFilteredCards(newFilteredCards);
    }
  }, [ newFilteredCards ]);

  // When data changes, generate markdown tables
  useEffect(() => {
    if (data) {
      generateTables(data.metadata, data.cardData);
    }
  }, [ data ]);

  return (
    <div style={{ height: window.innerHeight, width: '100%' }}>
      <FixedBackground bgImage={bgImage} />
      <FixedOverlay
        headerHeight={headerHeight}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        sidebarWidth={sidebarWidth}
      />
      <Body
        topOffset={topOffset}
        leftOffset={leftOffset}
      />
    </div>
  );
}



const mapStateToProps = state => {
  return {
    data: state.data,
    filter: state.filter,
    filteredCards: state.filteredCards
  };
};

export default connect(
  mapStateToProps,
  { setData, setFilter, setFilteredCards }
)(withResizeDetector(Main));