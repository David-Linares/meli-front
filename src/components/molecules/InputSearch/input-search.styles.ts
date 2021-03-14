import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 70%;
  height: 40px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 95%;
  font-size: 18px;
  padding: 0px 10px;
  border: none;
  height: 100%;
  &:focus {
    outline: none;
  }
`;
