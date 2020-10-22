import React, { useState } from "react";
import TUIEditor from "./TUIViewer";
import * as S from "./style";

const ViewMemo: React.FC = () => {
  const [state, setstate] = useState<string>("");

  const handleChange = (value: string) => {
    setstate(value);
  };

  return (
    <div>
      <S.ButtonWrapper>
        <button className="deleteBtn">삭제</button>
        <button>편잡</button>
      </S.ButtonWrapper>
      <S.ViewContents>
        <TUIEditor onChange={handleChange} />
      </S.ViewContents>
    </div>
  );
};

export default ViewMemo;
