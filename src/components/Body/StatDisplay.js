import React from 'react';
import { connect } from 'react-redux';
import "./StatDisplay.css";

import { generateStatTotals, generateKeywordTotals } from 'modules/hearthstone-card-stats';
import { generateFilterDescription } from 'modules/hearthstone-card-filter';

import StatSummary from 'components/DataDisplays/StatSummary';
import StatHistogram from 'components/DataDisplays/StatHistogram';
import KeywordDisplay from 'components/DataDisplays/KeywordDisplay';

import attackImg from 'img/stats/attack.png';
import healthImg from 'img/stats/health.png';
import manaCostImg from 'img/stats/mana.png';



const statsToTrack = [
  { name: 'Attack', accessor: 'attack', color: '#FEDC42', image: attackImg },
  { name: 'Health', accessor: 'health', color: '#FE4756', image: healthImg },
  { name: 'Mana Cost', accessor: 'manaCost', color: '#4080ff', image: manaCostImg },
];



const StatDisplay = ({ filter, filteredCards, metadata }) => {

  if (!filteredCards || !metadata) return <></>;

  const statTotals = generateStatTotals(filteredCards);
  const keywordTotals = generateKeywordTotals(filteredCards, metadata);
  const filterDescription = generateFilterDescription(filter);

  const statsToDisplay = [];
  statsToTrack.forEach((stat) => {
    const totals = statTotals[stat.accessor];
    if (Object.keys(totals.frequencies).length > 0) {
      statsToDisplay.push(stat);
    }
  });

  return (
    <div className="StatDisplay">
      <div className='StatDisplayHeader'>
        <p className="card-count">{filteredCards.length} cards found</p>
        <p className="filter-description">{filterDescription}</p>
      </div>

      <div className="StatDisplayData">
        {statsToDisplay.map(stat => {
          let totals = statTotals[stat.accessor];
          return (
            <div className='StatDisplayDataGridDiv' key={stat.name + 'summary'}>
              <div className="StatDisplayDataGroup">
                <div className='StatDisplayDataGroupHeader'>
                  <img className='StatDisplayDataGroupIcon' src={stat.image} alt={stat.name} />
                  <p className='StatDisplayDataGroupTitle'>{stat.name}</p>
                </div>
                <div className='StatDisplayDataGroupData'>
                  <StatHistogram
                    label={stat.name}
                    color={stat.color}
                    data={totals.frequencies}
                    minX={totals.min}
                    maxX={totals.max}
                    maxY={totals.maxFrequency}
                  />
                  <div className='StatSummaryDiv'>
                    <StatSummary
                      mean={totals.mean}
                      median={totals.median}
                      stdev={totals.stdev}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <KeywordDisplay keywordTotals={keywordTotals} cards={filteredCards} />
    </div>
  );
}



const mapStateToProps = state => {
  return {
    filter: state.filter,
    filteredCards: state.filteredCards,
    metadata: state.data.metadata
  };
};

export default connect(
  mapStateToProps,
)(StatDisplay);

