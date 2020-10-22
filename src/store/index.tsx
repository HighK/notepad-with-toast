import React from "react";
import MemoStore from "./memo";
import MemosStore from "./memos";

const Store: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <MemosStore>
      <MemoStore>{children}</MemoStore>
    </MemosStore>
  );
};

export default Store;
