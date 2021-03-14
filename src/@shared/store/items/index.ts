interface ItemsState {}

const initialState = {};

function ItemReducer(
  state: ItemsState = initialState,
  action: ItemsActionTypes
): ItemsState {
  switch (action.type) {
    case "FETCH_ITEMS_START":
      return {
        itemsDataResult: [],
        itemsDataError: false,
        itemsDataFetching: true,
      };
    case "FETCH_ITEMS_DONE":
      return {
        itemsDataResult: action.payload,
        itemsDataError: false,
        itemsDataFetching: false,
      };
      break;
    case "FETCH_ITEMS_FAILED":
      break;
    case "FETCH_ITEMS_RESET":
      break;

    default:
      break;
  }
}
