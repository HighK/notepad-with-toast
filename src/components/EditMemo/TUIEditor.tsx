import React, { useRef, useEffect } from "react";
import { Editor, EditorProps } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "codemirror/lib/codemirror.css";

interface Props extends EditorProps {
  onChange(value: string): void;
  update: string;
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
    onChange,
    update,
  } = props;

  const editorRef = useRef<Editor>();

  const handleChange = () => {
    if (editorRef.current) {
      onChange(editorRef.current.getInstance().getMarkdown());
    }
  };

  useEffect(() => {
    if (update === "") {
      if (editorRef.current) editorRef.current.getInstance().setMarkdown("");
    }
  }, [update]);

  return (
    <Editor
      usageStatistics={false}
      initialValue={initialValue || "hello react editor world!"}
      previewStyle={previewStyle || "vertical"}
      height={height || "600px"}
      initialEditType={initialEditType || "markdown"}
      useCommandShortcut={useCommandShortcut || true}
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
