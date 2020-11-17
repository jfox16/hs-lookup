import React from 'react';
import './StatSummary.css';

function StatSummary(props) {
  return (
    <div className="StatSummary">
      <div className='StatSummaryColumn'>
        <p className='StatSummaryLabel'>Mean</p>
        <p className='StatSummaryValue'>{props.mean.toFixed(1)}</p>
      </div>
      <div className='StatSummaryColumn'>
        <p className='StatSummaryLabel'>Median</p>
        <p className='StatSummaryValue'>{props.median.toFixed(1)}</p>
      </div>
      <div className='StatSummaryColumn'>
        <p className='StatSummaryLabel'>StDev</p>
        <p className='StatSummaryValue'>{props.stdev.toFixed(1)}</p>
      </div>
    </div>
  );
}

export default StatSummary;