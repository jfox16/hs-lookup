import { renderDataTypes } from '../actionTypes'

const initialState = {}

const selectedCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case renderDataTypes.SET_FILTERED_CARDS:
      const filteredCards = action.payload
      return {
        ...state,
        filteredCards: filteredCards
      }

    case renderDataTypes.SET_FILTER_DESCRIPTION:
      const filterDescription = action.payload
      return {
        ...state,
        filterDescription: filterDescription
      }

    case renderDataTypes.SET_FILTER_FORM_OPEN:
      const filterFormOpen = action.payload
      return {
        ...state,
        filterFormOpen: filterFormOpen
      }

    case renderDataTypes.SET_IS_MOBILE:
      const isMobile = action.payload
      return {
        ...state,
        isMobile: isMobile
      }

    case renderDataTypes.SELECT_CARD:
      const selectedCard = action.payload
      return {
        ...state,
        selectedCard: selectedCard
      }

    case renderDataTypes.DESELECT_CARD:
      return {
        ...state,
        selectedCard: null
      }

    default:
      return state
  }
}

export default selectedCardReducer
