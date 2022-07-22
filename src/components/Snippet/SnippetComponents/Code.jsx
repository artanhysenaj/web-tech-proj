import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
const Code = (props) => {
  const { content, showCode, language, editable } = props;
  const [code, setCode] = useState(null);
  const [copyText, setCopyText] = useState("Copy");

  const copyCodeHandler = async () => {
    await navigator.clipboard.writeText(code);
    setCopyText("✅ Copied!");
    setTimeout(() => {
      setCopyText("Copy");
    }, 1300);
  };
  return (
    showCode && (
      <div className=" relative rounded-lg">
        <button
          className="absolute z-10 mb-2 top-0 right-0 -translate-x-2 translate-y-2 bg-[#a0aec0]
          text-xs text-white text-center py-1 px-2 rounded border-none"
          onClick={copyCodeHandler}
        >
          {copyText}
        </button>
        <CodeEditor
          value={code ?? content}
          language={language}
          disabled={!editable}
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
