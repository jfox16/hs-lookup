import React, { useState, useEffect } from 'react';
import './KeywordDisplay.css';

function KeywordDisplay(props) {
  if (!props.keywordTotals || !props.keywordTotals.shouldBeDisplayed || !props.cards ) return <></>

  return (
    <div style={{textAlign: 'center'}}>
    <div className="KeywordDisplay">
      {Object.values(props.keywordTotals.keywords).map(total => {
        if (total.count === 0) return <></>
        return (
          <div className='KeywordDisplayDiv' key={'' + total.name + total.count + props.cards.length}>
            <p>{total.name}</p>
            <p className='KeywordPercentage'>{((total.count / props.cards.length)*100).toFixed(1) + '%'}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default KeywordDisplay;