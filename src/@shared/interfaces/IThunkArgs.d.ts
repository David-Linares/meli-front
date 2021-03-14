import { ThunkAction, ThunkDispatch } from "redux-thunk";

declare global {
  interface ThunksArgs {
    apolloClient: ApolloClient<undefined>;
    api: MicroserviceApi;
  }
  type AsyncAction = ThunkAction<
    Promise<void>,
    ReduxStore,
    ThunksArgs,
    AnyAction
  >;
  type AsyncDispatch = ThunkDispatch<ReduxStore, ThunksArgs, AnyAction>;
}
