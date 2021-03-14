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
