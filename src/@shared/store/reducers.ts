import { combineReducers } from "redux";
import { History } from "history";
import { ItemReducer } from "./items";

export const AppReducers = (history: History) =>
  combineReducers({
    itemsData: ItemReducer,
  });
