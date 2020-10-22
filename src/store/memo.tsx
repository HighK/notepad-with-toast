import React, { useState, createContext, Dispatch } from "react";

export type Memo = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  ModifiedAt: string;
  isActive: boolean;
};

export const initMemo = () => ({
  id: 0,
  title: "",
  body: "",
  createdAt: "",
  ModifiedAt: "",
  isActive: false,
});

export const MemoState = createContext<Memo>(initMemo());
export const MemoAction = createContext<Dispatch<Memo>>(() => {});

const MemoStore: React.FC<React.ReactNode> = ({ children }) => {
  const [memo, setMemo] = useState<Memo>(initMemo());

  return (
    <MemoState.Provider value={memo}>
      <MemoAction.Provider value={setMemo}>{children}</MemoAction.Provider>
    </MemoState.Provider>
  );
};

export default MemoStore;
