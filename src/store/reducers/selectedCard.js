
import { selectedCardTypes } from '../actionTypes';

const initialState = null;

const selectedCardReducer = (state = initialState, action) => {
  switch(action.type) {
    
    case selectedCardTypes.SELECT_CARD:
      return action.payload;

    case selectedCardTypes.DESELECT_CARD:
      return null;

    default: 
      return state;
  }
}

export default selectedCardReducer;