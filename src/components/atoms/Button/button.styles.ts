import styled from "styled-components";

export const Button = styled.button<{ style?: any }>`
  border: none;
  height: 45px;
  color: #fff;
  font-size: 16px;
  background-color: #3483fa;
  border-radius: 4px;
  ${(props) => (props.style ? props.style : null)}
`;
