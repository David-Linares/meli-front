import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router";
import { fetchItems } from "../../../@shared/store/items/actions";
import { selectItemsData } from "../../../@shared/store/items/selectors";
import { Breadcrumb } from "../../molecules/Breadcrumb/breadcrumb.component";
import { Header } from "../../molecules/header/header.component";
import { ResultItems } from "../../organisms/Resultitems/result-items";

export function ResultItemsPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = location.search;

  function searchQuery() {
    return new URLSearchParams(queryParams);
  }

  const querys = searchQuery();

  const { itemsDataResult, itemsDataError, itemsDataFetching } = useSelector(
    selectItemsData
  );

  useEffect(() => {
    if (querys.get("q")) {
      dispatch(fetchItems(querys.get("q")));
    }
  }, [querys.get("q")]);

  if (!querys.get("q")) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header></Header>
      <Breadcrumb
        breadItems={
          itemsDataResult.categories && itemsDataResult.categories.slice(0, 3)
        }
      />
      <ResultItems
        items={itemsDataResult.items ? itemsDataResult.items : []}
      ></ResultItems>
    </>
  );
}
