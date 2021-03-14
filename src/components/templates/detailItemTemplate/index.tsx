import { Redirect, useParams } from "react-router";
import { Header } from "../../molecules/header/header.component";

interface ItemsParams {
  id: string;
}

export function DetailItem() {
  const { id } = useParams<ItemsParams>();

  if (!id) {
    return <Redirect to="/" />;
  }

  return <Header></Header>;
}
