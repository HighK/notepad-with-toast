import React, { useEffect, useContext } from "react";
import TUIEditor from "./TUIEditor";
import * as S from "./style";
import { MemoState, MemoAction, initMemo } from "../../store/memo";
import {} from "../../store/memo";

const EditMemo: React.FC = () => {
  const memo = useContext(MemoState);
  const setMemo = useContext(MemoAction);

  const handleChange = (value: string) => {
    setMemo({
      ...memo,
      body: value,
    });
  };

  useEffect(() => {
    setMemo(initMemo());
    return () => {
      setMemo(initMemo());
    };
  }, []);

  return (
    <div>
      <S.ButtonWrapper>
        <button className="deleteBtn">삭제</button>
        <button>완료</button>
      </S.ButtonWrapper>
      <TUIEditor onChange={handleChange} />
    </div>
  );
};

export default EditMemo;
