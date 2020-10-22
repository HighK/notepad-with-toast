import React, { useRef, useCallback } from "react";
import { Editor, EditorProps } from "@toast-ui/react-editor";
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
      // valueType === "markdown" ? instance.getMarkdown() : instance.getHtml()
      instance.getHtml()
    );
  }, [props, editorRef]);

  return (
    <Editor
      initialValue={initialValue || "hello react editor world!"}
      previewStyle={previewStyle || "vertical"}
      height={height || "600px"}
      initialEditType={initialEditType || "markdown"}
      useCommandShortcut={useCommandShortcut || false}
      events={{
        change: handleChange,
      }}
      hooks={{
        addImageBlobHook: (
          blob: File | Blob,
          cb: (url: string, altText: string) => void
        ) => {
          console.log(blob);
          const uploadedImageURL =
            "https://avatars2.githubusercontent.com/u/8152823?s=60&u=016ea666f2cb0b7e6f8811163c7046ceeb8d9d2b&v=4";
          cb(uploadedImageURL, "alt text");
          return false;
        },
      }}
      ref={editorRef as React.MutableRefObject<Editor>}
    />
  );
};

export default TUIEditor;
