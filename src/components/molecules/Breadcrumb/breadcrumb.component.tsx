import { Text } from "../../atoms/Text/text.component";
import { BreadcrumbWrapper } from "./breadcrumb.styles";

export function Breadcrumb() {
  return (
    <BreadcrumbWrapper>
      <Text style={{ color: "#333", margin: "0 20px" }}>Hola Mundo</Text>/
      <Text style={{ color: "#333", margin: "0 20px" }}>Hola Mundo</Text>/
      <Text style={{ color: "#333", margin: "0 20px" }}>Hola Mundo</Text>
    </BreadcrumbWrapper>
  );
}
