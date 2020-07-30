import React from 'react';
import './KeywordDisplay.css';

function KeywordDisplay(props) {
  if (!props.keywordTotals || !props.keywordTotals.shouldBeDisplayed || !props.cards ) return <></>

  const keywordsToShow = [];
  Object.keys(props.keywordTotals.keywords).forEach((key) => {
    if (props.keywordTotals.keywords[key].count !== 0) {
      keywordsToShow.push(key);
    }
  })

  return (
    <div style={{textAlign: 'center'}}>
    <div className="KeywordDisplay">
      {keywordsToShow.map(key => {
        const total = props.keywordTotals.keywords[key];
        const percentage = ((total.count / props.cards.length)*100).toFixed(1) + '%';
        return (
          <div className='KeywordDisplayDiv' key={'' + total.name + percentage}>
            <p>{total.name}</p>
            <p className='KeywordPercentage'>{percentage}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default KeywordDisplay;