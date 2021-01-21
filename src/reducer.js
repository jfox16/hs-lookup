/**
 * This is the root reducer function for my Redux implementation.
 * I'm using Redux to maintain certain global variables that many parts of my application depend on.
 */

import { combineReducers } from 'redux';

import filtersReducer from './redux-features/filtersSlice';
import filteredCardsReducer from './redux-features/filteredCardsSlice'

const rootReducer = combineReducers({
  filters: filtersReducer,
  filteredCards: filteredCardsReducer
});

export default rootReducer;
