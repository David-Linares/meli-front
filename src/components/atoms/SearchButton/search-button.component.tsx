import iconSearch from "../../../assets/search.png";
import { ButtonSearch } from "./search-button.styles";

interface SearchButtonProps {
  onClick: any;
}

export function SearchButton({ onClick }: SearchButtonProps) {
  return <ButtonSearch onClick={onClick} image={iconSearch}></ButtonSearch>;
}
