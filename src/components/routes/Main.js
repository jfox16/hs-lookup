import React, { useState, useEffect } from 'react';
import { withResizeDetector } from 'react-resize-detector';

//IMPORT FUNCTIONS
import { filterCards, generateFilterDescription } from 'modules/hearthstone-card-filter';
import { generateMarkupTable } from 'modules/dataGenerator';

//IMPORT COMPONENTS
import FixedBackground from 'components/main/FixedBackground';
import FixedOverlay from 'components/main/FixedOverlay';
import Body from 'components/main/Body';

//IMPORT ASSETS
import bgImage from 'img/bg/darkmoon-fair-bg.png';

//DEFINE CONSTANTS
const SERVER_URL = 'https://hslookup.herokuapp.com/';
const generateTables = true;



const Main = (props) => {

  // data
  const [region] = useState('us');
  const [locale] = useState('en_US');
  const [metadata, setMetadata] = useState(null);
  const [cardData, setCardData] = useState(null);
  const [filters, setFilters] = useState({});
  const [filteredCards, setFilteredCards] = useState(null);
  const [filterDescription, setFilterDescription] = useState(null);

  // layout
  const [showHeader, setShowHeader] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const isMobile = window.innerWidth <= 700 || window.innerHeight <= 500;
  const headerHeight = (!isMobile) ? 50 : 30;
  const sidebarWidth = (!isMobile) ? 380 : '100%';
  const topOffset = headerHeight;
  const leftOffset = (isMobile || !showSidebar) ? 0 : sidebarWidth;
  const [showCardViewer, setShowCardViewer] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);


  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (showSidebar && isMobile) {
      setShowCardViewer(false);
    }
  }, [showSidebar]);

  useEffect(() => {
    console.log('showHeader', showHeader);
  }, [showHeader]);

  useEffect(() => {
    console.log('filteredCards', filteredCards);
  }, [filteredCards]);

  useEffect(() => {
    setFilteredCards(filterCards(metadata, cardData, filters));
    setFilterDescription(generateFilterDescription(filters));

    if (generateTables && cardData && typeof cardData !== 'string' && metadata && typeof metadata !== 'string') {
      console.log('GENERATING TABLES');
      console.log(generateMarkupTable(metadata, cardData, {cardType: 'minion'}));
      console.log(generateMarkupTable(metadata, cardData, {cardType: 'minion', format: 'standard'}));
      console.log(generateMarkupTable(metadata, cardData, {cardType: 'minion', format: 'duels'}));
    }
  }, [metadata, cardData, filters]);

  // const handleScroll = () => {
  //   const deltaY = window.scrollY - lastY;
  //   lastY = window.scrollY;
  //   setShowHeader(deltaY < 0);
  // };

  const fetchData = () => {
    setMetadata(null);
    setCardData(null);

    fetch(`${SERVER_URL}${region}/metadata?locale=${locale}`)
    .then((response) => response.json())
    .then((metadataJson) => {
      console.log('metadata:', metadataJson);
      initializeMetadata(metadataJson);
      setMetadata(metadataJson);
    })
    .catch((err) => {
      console.error('Error fetching metadata:', err);
      setMetadata('error');
    });

    fetch(`${SERVER_URL}${region}/allcards?locale=${locale}`)
    .then((response) => response.json())
    .then((cardDataJson) => {
      console.log('cardData:', cardDataJson);
      setCardData(cardDataJson);
    })
    .catch((err) => {
      console.error('Error fetching card data:', err);
      setCardData('error');
    });}

  const handleCardClick = (card) => {
    console.log(card.id);
    console.log(card);
    setShowCardViewer(true);
    setSelectedCard(card);
  }

  const initializeMetadata = (metadata) => {

    const minionTypes = metadata.minionTypes;

    // arrange minionTypes in alphabetical order
    minionTypes.sort((a, b) => a.name > b.name);
  }



  return (
    <div style={{height: window.innerHeight, width: '100%'}}>
      <FixedBackground bgImage={bgImage} />
      <FixedOverlay
        showHeader={showHeader}
        headerHeight={headerHeight}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        sidebarWidth={sidebarWidth}
        showCardViewer={showCardViewer}
        setShowCardViewer={setShowCardViewer}
        selectedCard={selectedCard}
        setFilters={setFilters}
        metadata={metadata}
      />
      <Body
        filteredCards={filteredCards}
        metadata={metadata}
        filterDescription={filterDescription}
        topOffset={topOffset}
        leftOffset={leftOffset}
        handleCardClick={handleCardClick}
      />
    </div>
  );
}

export default withResizeDetector(Main);