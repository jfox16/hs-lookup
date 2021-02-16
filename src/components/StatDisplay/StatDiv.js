// IMPORT FROM PACKAGES
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { MdExpandLess } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';

// IMPORT COMPONENTS
import StatSummary from 'components/DataDisplays/StatSummary';
import StatHistogram from 'components/DataDisplays/StatHistogram';
import IconButton from 'components/IconButton';



const StatDiv = ({ stat, totals, isLoading, filterFormOpen, isMobile }) => {

  const [ showMore, setShowMore ] = useState(false);

  const showMoreButton = (
    <div style={{textAlign: 'center'}}>
      <IconButton onClick={() => setShowMore(!showMore)} style={{fontSize: 24}}>
        {showMore ? <MdExpandLess /> : <FiMoreHorizontal />}
      </IconButton> 
    </div>
  );

  if (isLoading) {
    return (
      <div className='StatDisplayDataGridDiv'>
        <Skeleton height={isMobile ? 125 : 265} />
      </div>
    );
  }

  if (isMobile && !showMore) {
    return (
      <div className='StatDisplayDataGridDiv'>
        <div className="StatDisplayDataGroup">
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            <div className='StatDisplayDataGroupHeader'>
              <img className='StatDisplayDataGroupIcon' src={stat.image} alt={stat.name} />
              <p className='StatDisplayDataGroupTitle'>{stat.name}</p>
            </div>
            <div className='StatSummaryDiv' style={{flex: 0}}>
              <StatSummary
                mean={totals.mean}
                median={totals.median}
                stdev={totals.stdev}
              />
            </div>
          </div>
          {showMoreButton}
        </div>
      </div>
    );
  }

  return (
    <div className='StatDisplayDataGridDiv' key={stat.name + 'summary'}>
      <div className="StatDisplayDataGroup" style={{ zIndex: filterFormOpen ? -10 : 0 }}>
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
          <div className='StatSummaryDiv' style={{marginTop: -12, marginBottom: 4}}>
            <StatSummary
              mean={totals.mean}
              median={totals.median}
              stdev={totals.stdev}
            />
          </div>
        </div>
        {isMobile && showMoreButton}
      </div>
    </div>
  );
}



const mapStateToProps = state => {
  return {
    filterFormOpen: state.renderData.filterFormOpen,
    isMobile: state.renderData.isMobile
  };
};

export default connect(
  mapStateToProps,
)(StatDiv);

