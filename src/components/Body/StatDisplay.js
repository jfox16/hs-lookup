import React from 'react';
import "./StatDisplay.css";

import { generateStatTotals, generateKeywordTotals } from '../../modules/hearthstone-card-stats';

import StatSummary from '../DataDisplays/StatSummary';
import StatHistogram from '../DataDisplays/StatHistogram';
import KeywordDisplay from '../DataDisplays/KeywordDisplay';

import attackImg from '../../img/stats/attack.png';
import healthImg from '../../img/stats/health.png';
import manaCostImg from '../../img/stats/mana.png';



const statsToTrack = [
  { name: 'Attack', accessor: 'attack', color: '#FEDC42', image: attackImg },
  { name: 'Health', accessor: 'health', color: '#FE4756', image: healthImg },
  { name: 'Mana Cost', accessor: 'manaCost', color: '#4080ff', image: manaCostImg },
];



const StatDisplay = (props) => {
  
  if (!props.cards || !props.metadata) {
    return <></>
  }

  const statTotals = generateStatTotals(props.cards);
  const keywordTotals = generateKeywordTotals(props.cards, props.metadata);

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
        <p className="card-count">{props.cards.length} cards</p>
        <p className="filter-description">{props.filterDescription}</p>
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

      <KeywordDisplay keywordTotals={keywordTotals} cards={props.cards} />
    </div>
  );
}

export default StatDisplay;