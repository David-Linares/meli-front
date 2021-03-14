import { useHistory } from "react-router";
import logoML from "../../../assets/image.png";
import { LogoWrapper } from "./logo.styles";
export function Logo() {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <LogoWrapper
      onClick={() => {
        handleClick();
      }}
    >
      <img src={logoML} height="40px" />
    </LogoWrapper>
  );
}
