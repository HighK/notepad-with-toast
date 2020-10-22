import React, { useState, createContext, Dispatch } from "react";
import { Memo } from "./memo";

export const MemosState = createContext<Memo[]>([]);
export const MemosAction = createContext<Dispatch<Memo[]>>(() => {});

type Props = {
  initValue?: Memo[];
};

const MemosStore: React.FC<React.PropsWithChildren<Props>> = ({
  initValue,
  children,
}) => {
  const [memos, setMemos] = useState<Memo[]>([]);

  if (initValue) setMemos(initValue);

  return (
    <MemosState.Provider value={initValue || memos}>
      <MemosAction.Provider value={setMemos}>{children}</MemosAction.Provider>
    </MemosState.Provider>
  );
};

export default MemosStore;
