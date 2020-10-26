import React, { useContext, useEffect, useState } from "react";
import TUIEditor from "./TUIViewer";
import * as S from "./style";
import { MemosState, MemosAction } from "../../store/memos";
import { MemoState, MemoAction, initMemo } from "../../store/memo";
import { useParams, useHistory } from "react-router-dom";
import Button from "../common/Button";

const ViewMemo: React.FC = () => {
  const [isView, setView] = useState<boolean>(false);
  const memos = useContext(MemosState);
  const setMemos = useContext(MemosAction);
  const memo = useContext(MemoState);
  const setMemo = useContext(MemoAction);
  const { id }: any = useParams();
  const history = useHistory();

  const handleDeleteMemo = () => {
    const index = memos.indexOf(memo);
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
    setMemo(initMemo());
    history.push("/");
  };

  const handleModifyMemo = () => {
    history.push(`/edit/${id}`);
  };

  useEffect(() => {
    const selectMemo = memos.find((item) => item.id === Number(id));
    if (selectMemo) {
      setMemo(selectMemo);
      setView(true);
    }
  }, [memos, id, setMemo]);

  return (
    <div>
      {isView ? (
        <>
          <S.ButtonWrapper>
            <Button
              onClick={handleDeleteMemo}
              colors={{ bg: "#ff7070", font: "white" }}
            >
              삭제
            </Button>
            <Button onClick={handleModifyMemo}>편집</Button>
          </S.ButtonWrapper>
          <S.ViewContents>
            <h1>{memo.title}</h1>
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
