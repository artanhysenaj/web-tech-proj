import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
const Code = (props) => {
  const { code: snippet, showCode, language } = props;
  const [code, setCode] = useState(snippet);
  return (
    showCode && (
      <div className="rounded-lg">
        <CodeEditor
          value={code}
          language={language}
          //   disabled={!isAuthenticated}
          placeholder="Please enter your snippet code here"
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            borderRadius: "0.25rem",
            fontSize: 13,
            backgroundColor: "#161b22",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
      </div>
    )
  );
};

export default Code;
