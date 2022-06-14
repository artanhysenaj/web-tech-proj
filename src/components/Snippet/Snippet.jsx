import React, { useState } from "react";
import Code from "./Code";
const Snippet = (props) => {
  const { id, title, content, language, description } = props.snippet;
  const [showCode, setShowCode] = useState(false);

  const showCodeButton = (
    <button
      className="bg-[#9b2c2c] text-white text-sm font-bold py-1 px-2 rounded-[0.25rem] border-none mb-2"
      onClick={() => setShowCode((prevState) => !prevState)}
    >
      {showCode ? "Hide the Code" : "Show the Code 👇"}
    </button>
  );
  return (
    <li className="bg-[#f7fafc] rounded-md my-2 p-4 shadow-lg style-none">
      <div className="flex justify-between ">
        <h2 className="text-xl text-[#2d3748] font-bold ">{title.rendered}</h2>
        <span className="font-bold text-sm text-[#9b2c2c]  py-1 px-2 rounded-lg ">
          Language
        </span>
      </div>
      <p className="text-[0.9rem] text-[#1a202c] mb-2">Descrition</p>
      {showCodeButton}
      <Code
        code={content?.rendered}
        showCode={showCode}
        language="javascript"
      />

      <div className="mt-1">
        <span className="cursor-pointer text-[#333] mr-1 font-semibold text-[0.9rem] hover:underline">
          edit
        </span>
        <span className="cursor-pointer text-[#333] mr-1 font-semibold text-[0.9rem] hover:underline">
          delete
        </span>
      </div>
    </li>
  );
};

export default Snippet;
