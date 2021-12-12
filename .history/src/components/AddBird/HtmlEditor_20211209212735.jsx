import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function HtmlEditor() {
  return (
    <div>
      <div className="border">
        <Editor
          className="bg-primary"
          //editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          //onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    </div>
  );
}
