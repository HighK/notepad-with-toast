import React, { useEffect, useContext, ChangeEvent, useState } from "react";
import TUIEditor from "./TUIEditor";
import * as S from "./style";
import { MemoState, MemoAction, initMemo } from "../../store/memo";
import { MemosState, MemosAction } from "../../store/memos";
import { useHistory, useParams } from "react-router-dom";
import Button from "../common/Button";

const EditMemo: React.FC = () => {
  const history = useHistory();
  const { id }: any = useParams();

  const [body, setBody] = useState("");

  const memo = useContext(MemoState);
  const setMemo = useContext(MemoAction);
  const memos = useContext(MemosState);
  const setMemos = useContext(MemosAction);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemo({
      ...memo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (id) {
      const selectMemo = memos.find((item) => item.id === Number(id));
      if (selectMemo) {
        setMemo(selectMemo);
        setBody(memo.body);
      } else {
        alert("메모를 찾을 수 없습니다.");
        history.push("/");
      }
    } else {
      setMemo(initMemo());
    }
  }, [history, memos, id, setMemo, memo.body]);

  const handleSaveMemo = () => {
    if (!id) {
      setMemos(
        memos.concat({
          ...memo,
          body,
          id: memos.length + 1,
          createdAt: Date(),
          ModifiedAt: Date(),
        })
      );

      history.push("/");
    } else {
      const index = memos.findIndex((item) => item.id === Number(id));
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      newMemos.unshift({ ...memo, body, ModifiedAt: Date() });
      setMemos(newMemos);
      history.push(`/${id}`);
    }

    setMemo(initMemo());
  };

  const handleCancelMemo = () => {
    setMemo(initMemo());
    history.push("/");
  };

  return (
    <div>
      <S.ButtonWrapper>
        <Button
          onClick={handleCancelMemo}
          colors={{ bg: "#ff7070", font: "white" }}
        >
          취소
        </Button>
        <Button onClick={handleSaveMemo}>저장</Button>
      </S.ButtonWrapper>
      <S.TitleInput
        name="title"
        onChange={handleTitleChange}
        value={memo.title}
        placeholder="제목 입력..."
      />
      <TUIEditor
        initialValue={memo.body}
        onChange={(value) => {
          setBody(value);
        }}
        update={memo.body}
      />
    </div>
  );
};

export default EditMemo;
