import { combineReducers } from "redux";
import filter from "./reducers/filter";
import data from "./reducers/data";
import loadingItems from "./reducers/loadingItems";
import renderData from "./reducers/renderData";

export const rootReducer = combineReducers({
  filter,
  data,
  loadingItems,
  renderData,
});
