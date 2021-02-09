
import {
  filterTypes,
  dataTypes,
  filteredCardsTypes,
  filterFormOpenTypes,
  selectedCardTypes,
} from './actionTypes';



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



// METADATA ACTIONS

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



// FILTERED CARDS ACTIONS

export const setFilteredCards = ( filteredCards ) => ({
  type: filteredCardsTypes.SET_FILTERED_CARDS,
  payload: filteredCards
});



// FILTER FORM OPEN ACTIONS

export const setFilterFormOpen = ( open ) => ({
  type: filterFormOpenTypes.SET_FILTER_FORM_OPEN,
  payload: open
});



// SELECTED CARD ACTIONS

export const selectCard = ( card ) => ({
  type: selectedCardTypes.SELECT_CARD,
  payload: card
});

export const deselectCard = () => ({
  type: selectedCardTypes.DESELECT_CARD,
});