// IMPORT FROM PACKAGES
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

// IMPORT FUNCTIONS
import { generateStatTotals, generateKeywordTotals } from 'modules/hearthstone-card-stats';

// IMPORT COMPONENTS
import StatDiv from './StatDiv';
import KeywordDisplay from 'components/DataDisplays/KeywordDisplay';

// IMPORT ASSETS
import attackImg from 'img/stats/attack.png';
import healthImg from 'img/stats/health.png';
import manaCostImg from 'img/stats/mana.png';

import './StatDisplay.css';



const statsToTrack = [
  { name: 'Attack', accessor: 'attack', color: '#FEDC42', image: attackImg },
  { name: 'Health', accessor: 'health', color: '#FE4756', image: healthImg },
  { name: 'Mana Cost', accessor: 'manaCost', color: '#4080ff', image: manaCostImg },
];



const StatDisplay = ({ filterDescription, filteredCards, filterFormOpen, isMobile, metadata }) => {

  const [ showMore, setShowMore ] = useState(false);

  const isLoading = (!filterDescription || !filteredCards || !metadata) 
  // const isLoading = true;

  const statTotals = !isLoading && generateStatTotals(filteredCards);
  const keywordTotals = !isLoading && generateKeywordTotals(filteredCards, metadata);

  const statsToDisplay = [];
  if (statTotals) {
    statsToTrack.forEach((stat) => {
      const totals = statTotals[stat.accessor];
      if (Object.keys(totals.frequencies).length > 0) {
        statsToDisplay.push(stat);
      }
    });
  }

  return (
    <div className="StatDisplay">
      <div className='StatDisplayHeader'>
        <p className="filter-description">{!isLoading ? filterDescription : <Skeleton width={300} />}</p>
        <p className="card-count">{!isLoading ? `${filteredCards.length} cards found` : <Skeleton width={300} />}</p>
      </div>

      <div className="StatDisplayData">
        {!isLoading ?
          statsToDisplay.map(stat => (
            <StatDiv stat={stat} totals={statTotals && statTotals[stat.accessor]} key={stat.name} />
          ))
          :
          [...Array(3).keys()].map(i => (
            <StatDiv isLoading key={i} />
          ))
        }
      </div>

      {!isLoading  && <KeywordDisplay keywordTotals={keywordTotals} cards={filteredCards} />}
    </div>
  );
}



const mapStateToProps = state => {
  return {
    filterDescription: state.renderData.filterDescription,
    filteredCards: state.renderData.filteredCards,
    filterFormOpen: state.renderData.filterFormOpen,
    isMobile: state.renderData.isMobile,
    metadata: state.data.metadata
  };
};

export default connect(
  mapStateToProps,
)(StatDisplay);

