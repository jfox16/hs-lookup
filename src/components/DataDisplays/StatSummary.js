import React from 'react'
import Skeleton from 'react-loading-skeleton'
import './StatSummary.css'

function StatSummary({ mean, median, stdev }) {
  return (
    <div className="StatSummary">
      <div className="StatSummaryColumn">
        <p className="StatSummaryLabel">{mean ? 'Mean' : <Skeleton />}</p>
        <p className="StatSummaryValue">
          {mean ? mean.toFixed(1) : <Skeleton />}
        </p>
      </div>
      <div className="StatSummaryColumn">
        <p className="StatSummaryLabel">{median ? 'Median' : <Skeleton />}</p>
        <p className="StatSummaryValue">
          {median ? median.toFixed(1) : <Skeleton />}
        </p>
      </div>
      <div className="StatSummaryColumn">
        <p className="StatSummaryLabel">{stdev ? 'StDev' : <Skeleton />}</p>
        <p className="StatSummaryValue">
          {stdev ? stdev.toFixed(1) : <Skeleton />}
        </p>
      </div>
    </div>
  )
}

export default StatSummary
