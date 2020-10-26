import React from "react";
import * as S from "./style";

interface Props {
  colors?: { bg: string; font: string };
  onClick?(): any;
}

const Button: React.FC<React.PropsWithChildren<Props>> = (props) => (
  <S.Button {...props}>{props.children}</S.Button>
);

export default Button;
