import React from "react";
import { Editor, EditorProps } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "codemirror/lib/codemirror.css";

export interface TUIEditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

const TUIEditor = (props: TUIEditorWithForwardedProps) => (
  <>
    <Editor {...props} ref={props.forwardedRef} />
  </>
);

export default TUIEditor;
