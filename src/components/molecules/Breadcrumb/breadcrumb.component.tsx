import { Text } from "../../atoms/Text/text.component";
import { ImageContainer } from "../DetailItem/detail-item.styles";
import { BreadcrumbWrapper } from "./breadcrumb.styles";
import Arrow from "../../../assets/arrow-right.png";

interface BreadcrumbProps {
  breadItems: CategoryData[];
}

export function Breadcrumb({ breadItems }: BreadcrumbProps) {
  return (
    <BreadcrumbWrapper>
      {breadItems &&
        breadItems.map((bread, index) => (
          <>
            <Text style={{ color: "#333", margin: "0 20px" }}>
              {bread.name}
            </Text>
            {index + 1 !== breadItems.length && (
              <ImageContainer
                style={{
                  height: "12px",
                  width: "12px",
                  backgroundColor: "transparent",
                }}
                img={Arrow}
              ></ImageContainer>
            )}
          </>
        ))}
    </BreadcrumbWrapper>
  );
}
