
import React from 'react';
import './KeywordDisplay.css';

function KeywordDisplay(props) {

  if (!props.keywordTotals || !props.keywordTotals.shouldBeDisplayed || !props.cards ) return <></>

  const keywordsToShow = [];

  Object.keys(props.keywordTotals.keywordStats).forEach((key) => {
    if (props.keywordTotals.keywordStats[key].count !== 0) {
      keywordsToShow.push(key);
    }
  });

  const makePercentage = (decimalValue) => {

    const percent = decimalValue * 100;

    if (percent < 0.2) {
      return percent.toFixed(2) + '%';
    }
    else {
      return percent.toFixed(1) + '%';
    }
  }

  return (
    <div style={{textAlign: 'center'}}>
      <div className="KeywordDisplay">

        {keywordsToShow.map(key => {
          const total = props.keywordTotals.keywordStats[key];
          const percentage = makePercentage(total.count / props.cards.length);
          return (
            <div className='KeywordDisplayDiv' key={'' + total.name + percentage}>
              <p>{total.name}</p>
              <p className='KeywordPercentage'>{percentage}</p>
            </div>
          );
        })}

        <div className='KeywordDisplayDiv'>
          <p>Any Specific Card</p>
          <p className='KeywordPercentage'>{makePercentage(1 / props.cards.length)}</p>
        </div>
        
      </div>
    </div>
  );
}

export default KeywordDisplay;