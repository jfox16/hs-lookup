import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useAsyncMemo } from 'use-async-memo'
import { withResizeDetector } from 'react-resize-detector'
import Helmet from 'react-helmet'

//IMPORT COMPONENTS
import FixedBackground from 'components/FixedBackground'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import StatDisplay from 'components/StatDisplay'
import CardImageDisplay from 'components/CardImageDisplay'
import Modal from 'components/Modal'
import SelectedCardDisplay from 'components/SelectedCardDisplay'
import MobileFilterForm from 'components/MobileFilterForm'

//IMPORT FUNCTIONS
import {
  filterCardData,
  generateFilterDescription
} from 'modules/hearthstone-card-filter'
import { generateTables } from 'functions/dataGeneration'
import fetchData from 'functions/fetchData'
import {
  setData,
  setFilter,
  setFilteredCards,
  setFilterFormOpen,
  setFilterDescription,
  setIsMobile,
  deselectCard
} from 'store/actions'

//IMPORT ASSETS
import bgImage from 'img/bg/forged-in-the-barrens-bg.png'

// IMPORT CONSTANTS
import {
  SERVER_URL,
  DEBOUNCE_DELAY,
  DESKTOP_HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  SIDEBAR_WIDTH,
  MOBILE_BREAKPOINT_WIDTH
} from 'globalConstants'

import './Main.css'

// --- MAIN ---

const Main = ({
  data,
  setData,
  filter,
  setFilter,
  setFilteredCards,
  filterDescription,
  setFilterDescription,
  filterFormOpen,
  addLoadingItem,
  removeLoadingItem,
  isMobile,
  setIsMobile,
  selectedCard,
  deselectCard,
  metadata
}) => {
  const [region] = useState('us')
  const [locale] = useState('en_US')

  let defaultFilter = {
    cardSet: 'standard',
    cardType: 'minion'
  }

  // When app starts, set initial filterValues
  useEffect(() => {
    setFilter(defaultFilter)
  }, [])

  useEffect(() => {
    if (window.innerWidth) {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT_WIDTH)
    }
  }, [window.innerWidth])

  // When region or locale changes, fetch new metadata and card data
  useEffect(() => {
    if (region && locale) {
      fetchData(SERVER_URL, region, locale)
        .then((data) => setData(data))
        .catch((err) => console.log(err))
    }
  }, [region, locale])

  // When data or filters change, filter card data
  const newFilteredCards = useAsyncMemo(async () => {
    if (data && filter) {
      await new Promise((resolve) => setTimeout(resolve, DEBOUNCE_DELAY)) // await this amount of seconds
      return await filterCardData(data.metadata, data.cardData, filter)
    }
  }, [data, filter])

  // Put newfilteredCards in the redux store
  useEffect(() => {
    if (Array.isArray(newFilteredCards)) {
      setFilteredCards(newFilteredCards)
      setFilterDescription(generateFilterDescription(filter))
    }
  }, [newFilteredCards])

  // When data changes, generate markdown tables
  useEffect(() => {
    if (data) {
      generateTables(data.metadata, data.cardData)
    }
  }, [data])

  return (
    <div className="Main">
      <Helmet>
        {filterDescription ? (
          <title>{`${filterDescription} | HS Lookup`}</title>
        ) : (
          <title>HS Lookup</title>
        )}
      </Helmet>

      <FixedBackground backgroundImage={bgImage} />

      <Header />

      <div className="CenteredContent" style={{ height: window.innerHeight }}>
        {!isMobile && <Sidebar />}
        <div
          style={{
            paddingLeft: isMobile ? 0 : SIDEBAR_WIDTH,
            paddingTop: isMobile ? MOBILE_HEADER_HEIGHT : DESKTOP_HEADER_HEIGHT
          }}
        >
          <div className="Body">
            <StatDisplay />
            <CardImageDisplay />
          </div>
        </div>
      </div>

      {isMobile && filterFormOpen ? (
        <MobileFilterForm />
      ) : (
        selectedCard && (
          <Modal isOpen={selectedCard} closeModal={deselectCard}>
            <SelectedCardDisplay selectedCard={selectedCard} />
          </Modal>
        )
      )}
    </div>
  )
}

// --- EXPORT ---

const mapStateToProps = (state) => {
  return {
    data: state.data,
    filter: state.filter,
    filterDescription: state.renderData.filterDescription,
    filterFormOpen: state.renderData.filterFormOpen,
    filteredCards: state.renderData.filteredCards,
    isMobile: state.renderData.isMobile,
    selectedCard: state.renderData.selectedCard
  }
}

export default connect(mapStateToProps, {
  setData,
  setFilter,
  setFilteredCards,
  setFilterFormOpen,
  setFilterDescription,
  setIsMobile,
  deselectCard
})(withResizeDetector(Main))
