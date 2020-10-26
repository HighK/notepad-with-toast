import React, { useEffect, useRef } from "react";
import { EditorProps, Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "codemirror/lib/codemirror.css";

interface Props extends EditorProps {
  value: string;
}

const TUIEditor = (props: Props) => {
  const { value } = props;

  const viewerRef = useRef<Viewer>();

  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.getInstance().setMarkdown(value);
    }
  }, [value]);

  return (
    <Viewer
      initialValue={value}
      ref={viewerRef as React.MutableRefObject<Viewer>}
    />
  );
};

export default TUIEditor;
