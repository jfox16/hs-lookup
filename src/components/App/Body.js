import React, { useState, useEffect } from 'react';
import FilterForm from '../Body/FilterForm';
import CardImageDisplay from '../Body/CardImageDisplay';
import StatDisplay from '../Body/StatDisplay';
import SlidingDrawerLeft from '../Body/SlidingDrawerLeft';

import { filterCards, generateFilterDescription } from '../../modules/hearthstone-card-filter';

import './Body.css';

const SERVER_URL = 'https://hslookup.herokuapp.com/';

function Body(props) {
  const [region, setRegion] = useState('us');
  const [locale, setLocale] = useState('en_US');
  const [metadata, setMetadata] = useState(null);
  const [cardData, setCardData] = useState(null);
  const [filters, setFilters] = useState({});
  const [filteredCards, setFilteredCards] = useState(null);
  const [sortValue, setSortValue] = useState('manaCost');
  const [filterDescription, setFilterDescription] = useState('');

  // On component load
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredCards(filterCards(metadata, cardData, filters));
    setFilterDescription(generateFilterDescription(filters));
  }, [metadata, cardData, filters]);

  async function fetchData() {
    setMetadata(null);
    setCardData(null);

    fetch(`${SERVER_URL}${region}/metadata?locale=${locale}`)
    .then((response) => response.json())
    .then((metadataJson) => {
      console.log(metadataJson);
      setMetadata(metadataJson);
    })
    .catch((err) => {
      console.error('Error fetching metadata:', err);
      setMetadata('error');
    });

    fetch(`${SERVER_URL}${region}/allcards?locale=${locale}`)
    .then((response) => response.json())
    .then((cardDataJson) => {
      console.log(cardDataJson);
      setCardData(cardDataJson);
    })
    .catch((err) => {
      console.error('Error fetching card data:', err);
      setCardData('error');
    });
  }
  
  return (
    <div className='Body'>
      <SlidingDrawerLeft width='350px'>
        <FilterForm metadata={metadata} setFilters={setFilters} />
      </SlidingDrawerLeft>
      <div className='BodyRight'>
        <StatDisplay cards={filteredCards} metadata={metadata} filterDescription={filterDescription} />
        <CardImageDisplay cards={filteredCards} />
      </div>
    </div>
  );
}

export default Body;