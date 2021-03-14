import logoML from "../../../assets/image.png";
import { LogoWrapper } from "./logo.styles";
export function Logo() {
  return (
    <LogoWrapper>
      <img src={logoML} height="40px" />
    </LogoWrapper>
  );
}
