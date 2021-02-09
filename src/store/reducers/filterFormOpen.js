import { filterFormOpenTypes } from '../actionTypes';

const initialState = false;

const filterFormOpenReducer = (state = initialState, action) => {
  switch(action.type) {

    case filterFormOpenTypes.SET_FILTER_FORM_OPEN:
      return action.payload;

    default: 
      return state;
  }
}

export default filterFormOpenReducer;