import React from "react";
import * as S from "./style";

interface Props {
  event: { click: () => {} };
  colors?: { bg: string; font: string };
}

const Button: React.FC<React.PropsWithChildren<Props>> = ({
  event,
  colors,
  children,
}) => (
  <S.Button colors={colors} onClick={event.click}>
    {children}
  </S.Button>
);

export default Button;
