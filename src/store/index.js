import { combineReducers } from 'redux';
import data from './reducers/data';
import filter from './reducers/filter';
import renderData from './reducers/renderData';

export const rootReducer = combineReducers({
  filter,
  data,
  renderData
});