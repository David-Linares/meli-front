import { History } from "history";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MicroserviceApi } from "../api";

export const api = new MicroserviceApi();

export const ApplyAppMiddleware = (history: History) => {
  let middleware = applyMiddleware(
    thunk.withExtraArgument({
      api,
    })
  );

  return middleware;
};
