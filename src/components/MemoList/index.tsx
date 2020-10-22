import React, { useContext } from "react";
// import * as S from "./style";
import { MemoState, MemoAction, initMemo } from "../../store/memo";
import { MemosState, MemosAction } from "../../store/memos";
import { useHistory } from "react-router-dom";

const MemoList = () => {
  const history = useHistory();
  const memo = useContext(MemoState);
  const setMemo = useContext(MemoAction);
  const memos = useContext(MemosState);

  return (
    <>
      {memos.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            history.push("/" + item.id);
          }}
        >
          <h3>{item.title}</h3>
        </div>
      ))}
    </>
  );
};

export default MemoList;
