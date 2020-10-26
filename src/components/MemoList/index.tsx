import React, { useContext } from "react";
import * as S from "./style";
import { MemosState } from "../../store/memos";
import { useHistory } from "react-router-dom";

const MemoList = () => {
  const history = useHistory();
  const memos = useContext(MemosState);

  return (
    <>
      {memos.map((item) => (
        <S.MemoItem
          key={item.id}
          onClick={() => {
            history.push("/" + item.id);
          }}
        >
          <h3>{item.title !== "" ? item.title : "제목없음"}</h3>
          <p>{item.body.slice(0, 20)}</p>
          <div>
            {item.ModifiedAt.slice(11, 15)} {item.ModifiedAt.slice(4, 10)},
            {item.ModifiedAt.slice(16, 21)}
          </div>
        </S.MemoItem>
      ))}
    </>
  );
};

export default MemoList;
