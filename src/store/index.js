import { combineReducers } from 'redux';
import data from './reducers/data';
import filter from './reducers/filter';
import filteredCards from './reducers/filteredCards';
import selectedCard from './reducers/selectedCard';

export const rootReducer = combineReducers({ filter, data, filteredCards, selectedCard });