import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import { fetchItemDetail } from "../../../@shared/store/items/actions";
import {
  selectDetailItemData,
  selectItemsData,
} from "../../../@shared/store/items/selectors";
import { Breadcrumb } from "../../molecules/Breadcrumb/breadcrumb.component";
import { DetailItem } from "../../molecules/DetailItem/detail-item.component";
import { Header } from "../../molecules/header/header.component";

interface DetailParams {
  id: string;
}

export function DetailItemPage() {
  const dispatch = useDispatch();
  const urlParams = useParams<DetailParams>();

  const { itemsDataResult, itemsDataError, itemsDataFetching } = useSelector(
    selectItemsData
  );

  const { detailItemResult, detailItemError, detailItemFetching } = useSelector(
    selectDetailItemData
  );

  useEffect(() => {
    if (urlParams.id) {
      dispatch(fetchItemDetail(urlParams.id));
    }
  }, [urlParams.id]);

  if (!urlParams.id) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header></Header>
      <Breadcrumb
        breadItems={
          itemsDataResult &&
          itemsDataResult.categories &&
          itemsDataResult.categories
            .slice(0, 3)
            .concat([
              { name: detailItemResult.item && detailItemResult.item.title },
            ])
        }
      />
      <DetailItem detailItem={detailItemResult.item}></DetailItem>
    </>
  );
}
