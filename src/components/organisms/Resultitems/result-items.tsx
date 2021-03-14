import { useState } from "react";
import { ProductItem } from "../../molecules/ProductItem/product-item.component";
import { ResultItemsWrapper } from "./result-items.styles";

interface ResultItemsProps {
  items: ItemData[];
}

export function ResultItems({ items }: ResultItemsProps) {
  const getProductItem = (item) => {
    return <ProductItem productItem={item} />;
  };

  return (
    <ResultItemsWrapper>
      {items.map((item) => getProductItem(item))}
    </ResultItemsWrapper>
  );
}
