import { TextComponent } from "./text.styles";
import CSS from "csstype";

interface TextProps {
  style?: CSS.Properties;
  children: React.ReactNode;
}

export function Text({ style, children }: TextProps) {
  return <TextComponent style={style}>{children}</TextComponent>;
}
