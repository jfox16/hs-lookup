// IMPORT FROM PACKAGES
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

// IMPORT FUNCTIONS
import { generateStatTotals, generateKeywordTotals } from 'modules/hearthstone-card-stats';

// IMPORT COMPONENTS
import StatSummary from 'components/DataDisplays/StatSummary';
import StatHistogram from 'components/DataDisplays/StatHistogram';
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



const StatDisplay = ({ filterDescription, filteredCards, filterFormOpen, metadata }) => {

  useEffect(() => {
    console.log('filteredCards changed', filteredCards);
  }, [filteredCards]);

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
        {(!isLoading) ?
          statsToDisplay.map(stat => {
            let totals = statTotals && statTotals[stat.accessor];
            return (
              <div className='StatDisplayDataGridDiv' key={stat.name + 'summary'}>
                <div className="StatDisplayDataGroup" style={{zIndex: filterFormOpen ? -10 : 0}}>
                  <div className='StatDisplayDataGroupHeader'>
                    <img className='StatDisplayDataGroupIcon' src={stat.image} alt={stat.name} />
                    <p className='StatDisplayDataGroupTitle'>{stat.name}</p>
                  </div>
                  <div className='StatDisplayDataGroupData'>
                    {!isLoading ?
                      <StatHistogram
                        label={stat.name}
                        color={stat.color}
                        data={totals.frequencies}
                        minX={totals.min}
                        maxX={totals.max}
                        maxY={totals.maxFrequency}
                      />
                      :
                      <StatHistogram isLoading />
                    }
                    {!isLoading ?
                      <div className='StatSummaryDiv'>
                        <StatSummary
                          mean={totals.mean}
                          median={totals.median}
                          stdev={totals.stdev}
                        />
                      </div>
                      :
                      <div className='StatSummaryDiv'>
                        <StatSummary isLoading />
                      </div>
                    }
                  </div>
                </div>
              </div>
            );
          })
          :
          [1,2,3].map(i => (
            <div className='StatDisplayDataGridDiv' key={i}>
              <Skeleton height={265} />
            </div>
          ))
        }
      </div>

      {!isLoading ?
        <KeywordDisplay keywordTotals={keywordTotals} cards={filteredCards} />
        :
        <div style={{margin: 2}}>
          <Skeleton height={72} />
        </div>
      }
    </div>
  );
}



const mapStateToProps = state => {
  return {
    filterDescription: state.renderData.filterDescription,
    filteredCards: state.renderData.filteredCards,
    filterFormOpen: state.renderData.filterFormOpen,
    metadata: state.data.metadata
  };
};

export default connect(
  mapStateToProps,
)(StatDisplay);

