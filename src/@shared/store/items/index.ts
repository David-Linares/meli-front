const initialState = {
  itemsDataResult: {} as ItemResult,
  itemsDataError: false,
  itemsDataFetching: false,
};

export function ItemReducer(
  state: ItemResultState = initialState,
  action: ItemsActionTypes
): ItemResultState {
  switch (action.type) {
    case "FETCH_ITEMS_START":
      return {
        ...state,
        itemsDataResult: {} as ItemResult,
        itemsDataError: false,
        itemsDataFetching: true,
      };
    case "FETCH_ITEMS_DONE":
      return {
        ...state,
        itemsDataResult: action.payload,
        itemsDataError: false,
        itemsDataFetching: false,
      };
    case "FETCH_ITEMS_FAILED":
      return {
        ...state,
        itemsDataResult: {} as ItemResult,
        itemsDataError: true,
        itemsDataFetching: false,
      };
    case "FETCH_ITEMS_RESET":
      return {
        ...state,
        itemsDataResult: {} as ItemResult,
        itemsDataError: false,
        itemsDataFetching: false,
      };
    default:
      return {
        ...state,
      };
  }
}
