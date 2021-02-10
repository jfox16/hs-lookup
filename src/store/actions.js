
import {
  filterTypes,
  dataTypes,
  renderDataTypes,
} from './actionTypes';



// DATA ACTIONS

export const setData = ( data ) => ({
  type: dataTypes.SET_DATA,
  payload: data
});

export const setMetadata = ( metadata ) => ({
  type: dataTypes.SET_METADATA,
  payload: metadata
});

export const setCardData = ( cardData ) => ({
  type: dataTypes.SET_CARD_DATA,
  payload: cardData
});



// FILTER ACTIONS

export const setFilterValue = ( key, value ) => ({
  type: filterTypes.SET_FILTER_VALUE,
  payload: {
    key: key,
    value: value
  }
});

export const setFilter = ( filter ) => ({
  type: filterTypes.SET_FILTER,
  payload: filter
});

export const resetFilter = () => ({
  type: filterTypes.RESET_FILTER
});



// RENDER DATA ACTIONS

export const setFilteredCards = ( filteredCards ) => ({
  type: renderDataTypes.SET_FILTERED_CARDS,
  payload: filteredCards
});

export const setFilterDescription = ( filterDescription ) => ({
  type: renderDataTypes.SET_FILTER_DESCRIPTION,
  payload: filterDescription
})

export const setFilterFormOpen = ( open ) => ({
  type: renderDataTypes.SET_FILTER_FORM_OPEN,
  payload: open
});

export const selectCard = ( card ) => ({
  type: renderDataTypes.SELECT_CARD,
  payload: card
});

export const deselectCard = () => ({
  type: renderDataTypes.DESELECT_CARD,
});