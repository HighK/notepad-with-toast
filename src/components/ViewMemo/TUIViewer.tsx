import React, { useRef, useCallback } from "react";
import { Editor, EditorProps, Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "codemirror/lib/codemirror.css";

interface Props extends EditorProps {
  onChange(value: string): void;
  setImage?(imgUrl: string): void;
  valueType?: "markdown" | "html";
}

const TUIEditor = (props: Props) => {
  const {
    initialValue,
    previewStyle,
    height,
    initialEditType,
    useCommandShortcut,
  } = props;

  const editorRef = useRef<Editor>();

  const handleChange = useCallback(() => {
    if (!editorRef.current) {
      return;
    }
    const instance = editorRef.current.getInstance();
    const valueType = props.valueType || "markdown";

    props.onChange(
      valueType === "markdown" ? instance.getMarkdown() : instance.getHtml()
    );
  }, [props, editorRef]);

  return <Viewer initialValue="ASDSAD" />;
};

export default TUIEditor;
