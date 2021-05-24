import { loadingItemsTypes } from '../actionTypes'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case loadingItemsTypes.ADD_LOADING_ITEM:
      const itemToAdd = action.payload
      return { ...state, [itemToAdd]: true }

    case loadingItemsTypes.REMOVE_LOADING_ITEM:
      const itemToRemove = action.payload
      return { ...state, [itemToRemove]: false }

    case loadingItemsTypes.RESET_LOADING_ITEMS:
      return { ...initialState }

    default:
      return state
  }
}
