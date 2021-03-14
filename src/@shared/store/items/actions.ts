export const fetchItemsStart = (): ItemsActionTypes => ({
  type: "FETCH_ITEMS_START",
});

export const fetchItemsDone = (items: ItemResult): ItemsActionTypes => ({
  type: "FETCH_ITEMS_DONE",
  payload: items,
});

export const fetchItemsFailed = (): ItemsActionTypes => ({
  type: "FETCH_ITEMS_START",
});

export const fetchItemsReset = (): ItemsActionTypes => ({
  type: "FETCH_ITEMS_RESET",
});

export const fetchItems = (queryString: string | null): AsyncAction => {
  return async (dispatch: AsyncDispatch, getState, { api }) => {
    dispatch(fetchItemsStart());
    try {
      const query = `q=${queryString}`;
      const dataItems = await api.itemsService.getItems(query);
      dispatch(fetchItemsDone(dataItems));
    } catch (err) {
      console.warn(err);
      dispatch(fetchItemsFailed());
    }
  };
};

export const fetchItemDetailStart = (): ItemsActionTypes => ({
  type: "FETCH_ITEM_DETAIL_START",
});

export const fetchItemDetailDone = (
  items: DetailItemData
): ItemsActionTypes => ({
  type: "FETCH_ITEM_DETAIL_DONE",
  payload: items,
});

export const fetchItemDetailFailed = (): ItemsActionTypes => ({
  type: "FETCH_ITEM_DETAIL_START",
});

export const fetchItemDetailReset = (): ItemsActionTypes => ({
  type: "FETCH_ITEM_DETAIL_RESET",
});

export const fetchItemDetail = (id: string | null): AsyncAction => {
  return async (dispatch: AsyncDispatch, getState, { api }) => {
    dispatch(fetchItemDetailStart());
    try {
      const dataItems = await api.itemsService.getItemDetail(id);
      dispatch(fetchItemDetailDone(dataItems));
    } catch (err) {
      console.warn(err);
      dispatch(fetchItemDetailFailed());
    }
  };
};
