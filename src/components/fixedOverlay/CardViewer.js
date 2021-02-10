import React from 'react';
import { connect } from 'react-redux';

import { deselectCard } from 'store/actions';

import './CardViewer.css';

const CardViewer = ({ selectedCard, deselectCard }) => {

  return (
    <div className='CardViewer' onClick={deselectCard}>
      <img className='CardViewerCard' src={selectedCard.image} alt={selectedCard.name} />
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    selectedCard: state.renderData.selectedCard
  }
};

export default connect(
  mapStateToProps,
  { deselectCard }
)(CardViewer);