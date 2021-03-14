import styled from "styled-components";

export const ProductItemWrapper = styled.div`
  padding: 16px;
  display: flex;
  border-bottom: 1px solid #eee;
`;

export const ImageContainer = styled.div<{ img: string }>`
  background-color: #fff;
  background-image: url(${(props) => props.img});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain; /* Resize the background image to cover the entire container */
  border-radius: 4px;
  height: 180px;
  width: 180px;
`;

export const InfoProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 16px;
  width: 100%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
`;
export const PriceInfo = styled.div`
  margin-top: 8px;
  font-size: 24px;
`;
export const ProductName = styled.div`
  margin-top: 32px;
  font-size: 18px;
`;
export const LocationInfo = styled.div`
  font-size: 12px;
  margin-top: 8px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;
