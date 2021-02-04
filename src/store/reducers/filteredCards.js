
import { filteredCardsTypes } from '../actionTypes';

const initialState = [];

const filteredCardsReducer = (state = initialState, action) => {
  switch(action.type) {

    case filteredCardsTypes.SET_FILTERED_CARDS:
      return [ ...action.payload ];

    default: 
      return state;
  }
}

export default filteredCardsReducer;