import { Redirect, useParams } from "react-router";
import { DetailItemPage } from "../../pages/DetailItemPage/detail-item-page";

interface ItemsParams {
  id: string;
}

export function DetailItemTemplate() {
  const { id } = useParams<ItemsParams>();

  if (!id) {
    return <Redirect to="/" />;
  }

  return <DetailItemPage />;
}
