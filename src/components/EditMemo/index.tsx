import React, { useEffect, useContext, ChangeEvent } from "react";
import TUIEditor from "./TUIEditor";
import * as S from "./style";
import { MemoState, MemoAction, initMemo } from "../../store/memo";
import { MemosState, MemosAction } from "../../store/memos";
import { useHistory } from "react-router-dom";

const EditMemo: React.FC = ({ selectId }: any) => {
  const history = useHistory();
  const memo = useContext(MemoState);
  const setMemo = useContext(MemoAction);
  const memos = useContext(MemosState);
  const setMemos = useContext(MemosAction);

  const handleBodyChange = (value: string) => {
    setMemo({
      ...memo,
      body: value,
    });
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemo({
      ...memo,
      title: e.target.value,
    });

    console.log(memo.title, memo.body);
  };

  useEffect(() => {
    if (selectId) {
      const selectMemo = memos.find((item) => item.id === selectId) || null;
      if (selectMemo !== null) setMemo(selectMemo);
      else {
        alert("메모를 찾을 수 없습니다.");
        history.push("/");
      }
    } else {
      setMemo(initMemo());
    }

    return () => {
      setMemo(initMemo());
    };
  }, []);

  const handleSave = () => {
    if (!selectId)
      setMemos(
        memos.concat({
          ...memo,
          id: memos.length + 1,
          createdAt: Date(),
          ModifiedAt: Date(),
        })
      );
    else {
      setMemos(
        memos.concat({
          ...memo,
          ModifiedAt: Date(),
        })
      );
    }

    history.push("/");
  };

  return (
    <div>
      <S.ButtonWrapper>
        <button className="deleteBtn">삭제</button>
        <button onClick={handleSave}>저장</button>
      </S.ButtonWrapper>
      <input onChange={handleTitleChange} value={memo.title} />
      <TUIEditor onChange={handleBodyChange} />
    </div>
  );
};

export default EditMemo;
