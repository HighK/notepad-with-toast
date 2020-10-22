import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../common/Button/style";
import * as S from "./style";

const Header = () => {
  const history = useHistory();
  return (
    <S.Wrapper>
      <span>XXX</span>
      <Button
        onClick={() => history.push("/new")}
        colors={{ bg: "skyblue", font: "white" }}
      >
        새 메모
      </Button>
    </S.Wrapper>
  );
};

export default Header;
