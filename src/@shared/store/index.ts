import { createStore } from "redux";
import { createBrowserHistory } from "history";
import { AppReducers } from "./reducers";

export const history = createBrowserHistory();

export const appStore = createStore(AppReducers(history));
