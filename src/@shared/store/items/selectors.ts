export function getItemsData(state: ReduxStore) {
  return state.itemsData;
}

export function selectItemsData(state: ReduxStore) {
  const { itemsDataResult, itemsDataError, itemsDataFetching } = getItemsData(
    state
  );
  return { itemsDataResult, itemsDataError, itemsDataFetching };
}

export function selectDetailItemData(state: ReduxStore) {
  const {
    detailItemResult,
    detailItemError,
    detailItemFetching,
  } = getItemsData(state);
  return { detailItemResult, detailItemError, detailItemFetching };
}
