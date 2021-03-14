interface ReduxStore {
  itemsData: ItemResultState;
  itemResult: ItemDetailResult;
}

interface ItemResultState {
  itemsDataResult: ItemResult;
  itemsDataError: boolean;
  itemsDataFetching: boolean;
}
