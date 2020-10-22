import React from "react";
import EditMemo from "../EditMemo";
import ViewMemo from "../ViewMemo";
import * as S from "./style";

const Layout: React.FC = () => {
  return (
    <S.Warpper>
      <S.HeaderWrapper></S.HeaderWrapper>
      <S.MainWrapper>
        <S.LestSideWarpper></S.LestSideWarpper>
        <S.ContentsWarpper>
          {/* <EditMemo /> */}
          <ViewMemo />
        </S.ContentsWarpper>
      </S.MainWrapper>
    </S.Warpper>
  );
};

export default Layout;
