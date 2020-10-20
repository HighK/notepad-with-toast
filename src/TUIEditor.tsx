import React, { useRef, forwardRef, useCallback } from "react";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import TUIEditorWrapper, {
  TUIEditorWithForwardedProps,
} from "./TUIEditorWrapper";

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

interface Props extends EditorProps {
  onChange(value: string): void;
  setImage(imgUrl: string): void;

  valueType?: "markdown" | "html";
}

const Editor = (props: TUIEditorWithForwardedProps) => (
  <TUIEditorWrapper forwardedRef={props.forwardedRef} />
);

const EditorWithForwardedRef = forwardRef<
  EditorType | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

const TUIEditor = (props: Props) => {
  const {
    initialValue,
    previewStyle,
    height,
    initialEditType,
    useCommandShortcut,
  } = props;

  const editorRef = useRef<EditorType>();
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

  return (
    <div>
      <EditorWithForwardedRef
        {...props}
        initialValue={initialValue || "hello react editor world!"}
        previewStyle={previewStyle || "vertical"}
        height={height || "600px"}
        initialEditType={initialEditType || "markdown"}
        useCommandShortcut={useCommandShortcut || false}
        ref={editorRef}
        onChange={handleChange}
      />
    </div>
  );
};

export default TUIEditor;
