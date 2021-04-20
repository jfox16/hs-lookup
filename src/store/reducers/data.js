import { dataTypes } from "../actionTypes";

const initialState = {
  metadata: null,
  cardData: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataTypes.SET_DATA:
      return action.payload;

    case dataTypes.SET_METADATA:
      return {
        ...state,
        metadata: action.payload,
      };

    case dataTypes.SET_CARD_DATA:
      return {
        ...state,
        cardData: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
