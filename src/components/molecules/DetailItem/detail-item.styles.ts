import styled from "styled-components";

export const DetailItemWrapper = styled.div`
  width: 75%;
  padding: 32px;
  background: white;
  margin: 0 auto;
  display: flex;
`;
export const InfoPicWrapper = styled.div`
  max-width: 680px;
`;

export const DescriptionInfo = styled.div``;

export const ImageContainer = styled.div<{ img: string; style?: any }>`
  background-color: #fff;
  background-image: url(${(props) => props.img});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain; /* Resize the background image to cover the entire container */
  border-radius: 4px;
  ${(props) => (props.style ? props.style : null)};
`;

export const InfoProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 16px;
`;

export const StatusInfo = styled.div`
  font-size: 14px;
  margin-top: 32px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
`;
export const PriceInfo = styled.div`
  margin-top: 32px;
  font-size: 46px;
`;
export const ProductName = styled.div`
  margin-top: 16px;
  font-size: 24px;
`;
