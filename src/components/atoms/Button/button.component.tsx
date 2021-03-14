import { Button } from "./button.styles";

interface SearchButtonProps {
  style: any;
  onClick: any;
  children: React.ReactNode;
}

export function ButtonComponent({
  style,
  onClick,
  children,
}: SearchButtonProps) {
  return (
    <Button style={style} onClick={onClick}>
      {children}
    </Button>
  );
}
