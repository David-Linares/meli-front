import { InputSearch } from "../InputSearch/input-search.component";
import { Logo } from "../../atoms/Logo/logo.component";
import { HeaderWrapper } from "./header.styles";
export function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <InputSearch />
    </HeaderWrapper>
  );
}
