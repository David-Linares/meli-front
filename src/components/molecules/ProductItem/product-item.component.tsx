import { formatter } from "../../../@shared/helpers";
import { Text } from "../../atoms/Text/text.component";
import {
  ProductItemWrapper,
  ImageContainer,
  InfoProductWrapper,
  ProductInfo,
  PriceInfo,
  ProductName,
  LocationInfo,
} from "./product-item.styles";

interface ProductItemProps {
  productItem: ItemResult;
}

export function ProductItem({ productItem }: ProductItemProps) {
  return (
    <ProductItemWrapper>
      <ImageContainer img={productItem.picture} />
      <InfoProductWrapper>
        <ProductInfo>
          <PriceInfo>
            <Text>{formatter.format(productItem.price.amount)}</Text>
          </PriceInfo>
          <ProductName>
            <Text>{productItem.title}</Text>
          </ProductName>
        </ProductInfo>
        <LocationInfo>
          <Text>{productItem.address}</Text>
        </LocationInfo>
      </InfoProductWrapper>
    </ProductItemWrapper>
  );
}
