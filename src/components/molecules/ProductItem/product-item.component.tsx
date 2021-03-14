import { useHistory } from "react-router";
import { formatter } from "../../../@shared/helpers";
import { Text } from "../../atoms/Text/text.component";
import shipping from "../../../assets/shipping.png";
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
  productItem: ItemData;
}

export function ProductItem({ productItem }: ProductItemProps) {
  const history = useHistory();

  function handleClick(id) {
    history.push(`/items/${id}`);
  }
  return (
    <ProductItemWrapper>
      <ImageContainer
        onClick={() => {
          handleClick(productItem.id);
        }}
        img={productItem.picture}
      />
      <InfoProductWrapper>
        <ProductInfo>
          <PriceInfo>
            <Text>{formatter.format(productItem.price.amount)}</Text>
            {productItem.free_shipping && (
              <ImageContainer
                style={{ height: "20px", width: "20px", marginLeft: "16px" }}
                onClick={() => {
                  handleClick(productItem.id);
                }}
                img={shipping}
              />
            )}
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
