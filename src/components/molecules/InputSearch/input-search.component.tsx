import { SearchButton } from "../../atoms/SearchButton/search-button.component";
import { InputWrapper, SearchInput } from "./input-search.styles";
import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { fetchItemsReset } from "../../../@shared/store/items/actions";
export function InputSearch() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  function onSubmit() {
    dispatch(fetchItemsReset());
    history.push(`/items?q=${searchValue}`);
  }

  return (
    <InputWrapper>
      <SearchInput
        placeholder={"Nunca dejes de buscar"}
        onKeyDown={(e) => {
          if (e.code === "Enter" || e.code === "NumpadEnter") {
            onSubmit();
          }
        }}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      ></SearchInput>
      <SearchButton onClick={() => onSubmit()} />
    </InputWrapper>
  );
}
