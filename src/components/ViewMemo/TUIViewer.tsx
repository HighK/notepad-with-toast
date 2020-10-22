import React, { useRef, useEffect } from "react";
import { EditorProps, Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "codemirror/lib/codemirror.css";

interface Props extends EditorProps {
  value: string;
}

const TUIEditor = (props: Props) => {
  const { value } = props;

  // const createMarkup = () => {
  //   return { __html: value };
  // };

  useEffect(() => {}, [value]);

  // return <div dangerouslySetInnerHTML={createMarkup()}></div>;
  return <Viewer initialValue={value} />;
};

export default TUIEditor;
