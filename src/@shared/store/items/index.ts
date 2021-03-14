const initialState = {
  itemsDataResult: {} as ItemResult,
  itemsDataError: false,
  itemsDataFetching: false,
  detailItemResult: {} as DetailItemData,
  detailItemError: false,
  detailItemFetching: false,
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
    case "FETCH_ITEM_DETAIL_START":
      return {
        ...state,
        detailItemResult: {} as DetailItemData,
        detailItemError: false,
        detailItemFetching: true,
      };
    case "FETCH_ITEM_DETAIL_DONE":
      return {
        ...state,
        detailItemResult: action.payload,
        detailItemError: false,
        detailItemFetching: false,
      };
    case "FETCH_ITEM_DETAIL_FAILED":
      return {
        ...state,
        detailItemResult: {} as DetailItemData,
        detailItemError: true,
        detailItemFetching: false,
      };
    case "FETCH_ITEM_DETAIL_RESET":
      return {
        ...state,
        detailItemResult: {} as DetailItemData,
        detailItemError: false,
        detailItemFetching: false,
      };
    default:
      return {
        ...state,
      };
  }
}
