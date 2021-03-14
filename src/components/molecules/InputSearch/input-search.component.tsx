import { SearchButton } from "../../atoms/SearchButton/search-button.component";
import { InputWrapper, SearchInput } from "./input-search.styles";
export function InputSearch() {
  return (
    <InputWrapper>
      <SearchInput placeholder={"Nunca dejes de buscar"}></SearchInput>
      <SearchButton />
    </InputWrapper>
  );
}
