import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withResizeDetector } from 'react-resize-detector';
import { useAsyncMemo } from 'use-async-memo';
import Helmet from 'react-helmet';

//IMPORT COMPONENTS
import FixedBackground from 'components/main/FixedBackground';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import FilterForm from 'components/FilterForm';
import Footer from 'components/Footer';
import StatDisplay from 'components/StatDisplay';
import CardImageDisplay from 'components/CardImageDisplay';
import Modal from 'components/Modal';
import SelectedCardDisplay from 'components/SelectedCardDisplay';

//IMPORT FUNCTIONS
import { filterCardData, generateFilterDescription } from 'modules/hearthstone-card-filter';
import { generateTables } from 'functions/dataGeneration';
import fetchData from 'functions/fetchData';
import {
  setData,
  setFilter,
  setFilteredCards,
  setFilterFormOpen,
  setFilterDescription,
  deselectCard
} from 'store/actions';

//IMPORT ASSETS
import bgImage from 'img/bg/darkmoon-races-bg.png';

// IMPORT CONSTANTS
import { SERVER_URL, DEBOUNCE_DELAY, DESKTOP_HEADER_HEIGHT, SIDEBAR_WIDTH } from 'globalConstants';

import './Main.css';



// Main ================================================================================================================

const Main = ({
  data,
  setData,
  filter,
  setFilter,
  setFilteredCards,
  filterDescription,
  setFilterDescription,
  selectedCard,
  deselectCard
}) => {

  const [region] = useState('us');
  const [locale] = useState('en_US');

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
      setFilterDescription(generateFilterDescription(filter));
    }
  }, [ newFilteredCards ]);

  // When data changes, generate markdown tables
  useEffect(() => {
    if (data) {
      generateTables(data.metadata, data.cardData);
    }
  }, [ data ]);

  return (
    <div className='Main'>

      <Helmet>
        {filterDescription && <title>{ `${filterDescription} | HS Lookup` }</title>}
      </Helmet>

      <FixedBackground bgImage={bgImage} />

      <Header />

      <div className='CenteredContent' style={{ height: window.innerHeight }}>
        <Sidebar>
          <FilterForm />
          <Footer />
        </Sidebar>
        <div style={{paddingLeft: SIDEBAR_WIDTH, paddingTop: DESKTOP_HEADER_HEIGHT }}>
          <div className='Body'>
            <StatDisplay />
            <CardImageDisplay />
          </div>
        </div>
      </div>

      <Modal isOpen={selectedCard} closeModal={deselectCard}>
        <SelectedCardDisplay selectedCard={selectedCard} />
      </Modal>
    </div>
  );
}



// EXPORT ==============================================================================================================

const mapStateToProps = state => {
  return {
    data: state.data,
    filter: state.filter,
    filterDescription: state.renderData.filterDescription,
    filterFormOpen: state.renderData.filterFormOpen,
    filteredCards: state.renderData.filteredCards,
    selectedCard: state.renderData.selectedCard,
  };
};

export default connect(
  mapStateToProps,
  {
    setData,
    setFilter,
    setFilteredCards,
    setFilterFormOpen,
    setFilterDescription,
    deselectCard
  }
)(withResizeDetector(Main));