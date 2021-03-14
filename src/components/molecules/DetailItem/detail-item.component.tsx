import { useHistory } from "react-router";
import { formatter } from "../../../@shared/helpers";
import { Subtitle } from "../../atoms/Subtitle/subtitle.component";
import { Text } from "../../atoms/Text/text.component";
import { InfoPicWrapper, DescriptionInfo } from "./detail-item.styles";
import { ButtonComponent } from "../../atoms/Button/button.component";
import {
  DetailItemWrapper,
  ImageContainer,
  InfoProductWrapper,
  PriceInfo,
  ProductInfo,
  ProductName,
  StatusInfo,
} from "./detail-item.styles";

interface DetailItemProps {
  detailItem: DetailItemData;
}

export function DetailItem({ detailItem }: DetailItemProps) {
  const history = useHistory();

  function handleClick(id) {
    history.push(`/items/${id}`);
  }
  return detailItem && Object.keys(detailItem).length > 0 ? (
    <DetailItemWrapper>
      <InfoPicWrapper>
        <ImageContainer
          onClick={() => {
            handleClick(detailItem.id);
          }}
          img={detailItem.picture}
          style={{
            width: "680px",
            height: "680px",
          }}
        />
        <DescriptionInfo>
          <Subtitle>Descripción del producto</Subtitle>
          <div style={{ marginTop: "36px" }}>
            <Text style={{ fontSize: "16px" }}>{detailItem.description}</Text>
          </div>
        </DescriptionInfo>
      </InfoPicWrapper>
      <InfoProductWrapper>
        <ProductInfo>
          <StatusInfo>
            <Text
              style={{ fontSize: "14px" }}
            >{`${detailItem.condition} - ${detailItem.sold_quantity} vendidos`}</Text>
          </StatusInfo>
          <ProductName>
            <Text>{detailItem.title}</Text>
          </ProductName>
          <PriceInfo>
            <Text>{formatter.format(detailItem.price.amount)}</Text>
          </PriceInfo>
          <ButtonComponent style={{ marginTop: "36px" }} onClick={() => {}}>
            Comprar
          </ButtonComponent>
        </ProductInfo>
      </InfoProductWrapper>
    </DetailItemWrapper>
  ) : (
    <DetailItemWrapper />
  );
}
