import CSS from "csstype";
import { SubtitleStyle } from "./subtitle.styles";

interface SubtitleProps {
  style?: CSS.Properties;
  children: React.ReactNode;
}

export function Subtitle({ style, children }: SubtitleProps) {
  return <SubtitleStyle style={style}>{children}</SubtitleStyle>;
}
