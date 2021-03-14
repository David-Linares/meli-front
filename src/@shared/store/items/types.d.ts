type ItemsActionTypes =
  | { type: "FETCH_ITEMS_START" }
  | { type: "FETCH_ITEMS_DONE"; payload: ItemResult }
  | { type: "FETCH_ITEMS_FAILED" }
  | { type: "FETCH_ITEMS_RESET" }
  | { type: "FETCH_ITEM_DETAIL_START" }
  | { type: "FETCH_ITEM_DETAIL_DONE"; payload: DetailItemData }
  | { type: "FETCH_ITEM_DETAIL_FAILED" }
  | { type: "FETCH_ITEM_DETAIL_RESET" };
