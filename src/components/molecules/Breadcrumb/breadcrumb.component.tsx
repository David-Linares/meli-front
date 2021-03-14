import { Text } from "../../atoms/Text/text.component";
import { BreadcrumbWrapper } from "./breadcrumb.styles";

interface BreadcrumbProps {
  breadItems: CategoryData[];
}

export function Breadcrumb({ breadItems }: BreadcrumbProps) {
  return (
    <BreadcrumbWrapper>
      {breadItems &&
        breadItems.map((bread) => (
          <Text style={{ color: "#333", margin: "0 20px" }}>{bread.name}</Text>
        ))}
    </BreadcrumbWrapper>
  );
}
