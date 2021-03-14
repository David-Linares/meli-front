import { createBrowserHistory } from "history";
import { createStore } from "redux";
import { ApplyAppMiddleware } from "./middlewares";
import { AppReducers } from "./reducers";

export const history = createBrowserHistory();

export const appStore = createStore(
  AppReducers(history),
  ApplyAppMiddleware(history)
);
