import styled from "styled-components";

export const ButtonWrapper = styled.div`
  height: 100%;
`;

export const ButtonSearch = styled.button<{ image: any }>`
  border: none;
  width: 5%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-color: #eee;
`;
