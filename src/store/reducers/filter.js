import { filterTypes } from '../actionTypes'

const initialState = {
  cardSet: 'standard',
  cardType: 'minion'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case filterTypes.SET_FILTER_VALUE: {
      const { key, value } = action.payload
      return {
        ...state,
        [key]: value
      }
    }

    case filterTypes.SET_FILTER: {
      return { ...action.payload }
    }

    case filterTypes.RESET_FILTER: {
      return initialState
    }

    default:
      return state
  }
}
