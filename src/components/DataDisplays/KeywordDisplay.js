
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './KeywordDisplay.css';

function KeywordDisplay({ cards, keywordTotals}) {


  if (!cards || !keywordTotals ) {
    return (
      <div style={{textAlign: 'center'}}>
        <div className="KeywordDisplay">
          {(new Array(10)).map((_, i) => {
            return (
              <div className='KeywordDisplayDiv' key={i}>
                <p><Skeleton /></p>
                <p className='KeywordPercentage'><Skeleton /></p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (!keywordTotals.shouldBeDisplayed) return <></>
  
  const keywordsToShow = [];

  Object.keys(keywordTotals.keywordStats).forEach((key) => {
    if (keywordTotals.keywordStats[key].count !== 0) {
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
          const total = keywordTotals.keywordStats[key];
          const percentage = makePercentage(total.count / cards.length);
          return (
            <div className='KeywordDisplayDiv' key={'' + total.name + percentage}>
              <p>{total.name}</p>
              <p className='KeywordPercentage'>{percentage}</p>
            </div>
          );
        })}

        <div className='KeywordDisplayDiv'>
          <p>Any Specific Card</p>
          <p className='KeywordPercentage'>{makePercentage(1 / cards.length)}</p>
        </div>
        
      </div>
    </div>
  );
}

export default KeywordDisplay;