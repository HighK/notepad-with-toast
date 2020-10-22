import React from "react";
import EditMemo from "../EditMemo";
import ViewMemo from "../ViewMemo";
import Header from "../Header";
import * as S from "./style";
import { Switch, Route } from "react-router-dom";
import MemoList from "../MemoList";

const Layout: React.FC = () => {
  return (
    <S.Warpper>
      <Header />
      <S.MainWrapper>
        <S.LestSideWarpper>
          <MemoList />
        </S.LestSideWarpper>
        <S.ContentsWarpper>
          <Switch>
            <Route path="/new">
              <EditMemo />
            </Route>
            <Route path="/:id/edit">
              <EditMemo />
            </Route>
            <Route path="/:id" exact>
              <ViewMemo />
            </Route>
          </Switch>
        </S.ContentsWarpper>
      </S.MainWrapper>
    </S.Warpper>
  );
};

export default Layout;
