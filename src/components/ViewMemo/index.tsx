import React, { useContext, useEffect, useState } from "react";
import TUIEditor from "./TUIViewer";
import * as S from "./style";
import { MemosState } from "../../store/memos";
import { MemoState, MemoAction } from "../../store/memo";
import { useParams } from "react-router-dom";

const ViewMemo: React.FC = () => {
  const [isView, setView] = useState<boolean>(false);
  const memos = useContext(MemosState);
  const memo = useContext(MemoState);
  const setMemo = useContext(MemoAction);
  const { id }: any = useParams();

  useEffect(() => {
    const selectMemo = memos.find((item) => item.id == id);
    console.log(selectMemo, id, memos);
    if (selectMemo) {
      setMemo(selectMemo);
      setView(true);
    }
  }, [memos]);

  return (
    <div>
      {isView ? (
        <>
          <S.ButtonWrapper>
            <button className="deleteBtn">삭제</button>
            <button>편잡</button>
          </S.ButtonWrapper>
          <S.ViewContents>
            <input readOnly value={memo.title} />
            <TUIEditor value={memo.body} />
          </S.ViewContents>
        </>
      ) : (
        <h1>No Contents</h1>
      )}
    </div>
  );
};

export default ViewMemo;
