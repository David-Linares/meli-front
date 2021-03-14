type ItemsActionTypes =
  | { type: "FETCH_ITEMS_START" }
  | { type: "FETCH_ITEMS_DONE"; payload: ItemResult }
  | { type: "FETCH_ITEMS_FAILED" }
  | { type: "FETCH_ITEMS_RESET" };
