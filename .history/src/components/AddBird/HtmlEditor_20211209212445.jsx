import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function HtmlEditor() {
  return (
    <Editor
      //editorState={editorState}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      //onEditorStateChange={this.onEditorStateChange}
    />
  );
}
