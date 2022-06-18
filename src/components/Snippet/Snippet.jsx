import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { getLanguage } from "../../api/Languages/Languages";
import { useFetch } from "../../hooks/use-fetch";
import { authContext } from "../../store/AuthContext/auth-context";
import Code from "./Code";
const Snippet = React.forwardRef((props, ref) => {
  const [showCode, setShowCode] = useState(false);
  const [language, setLanguage] = useState([]);
  const {
    id,
    title,
    content,
    languages: languageId,
    excerpt: description,
    x_author,
  } = props.snippet;
  const date = new Date(props.snippet.date).toDateString();
  const { authenticated } = useContext(authContext);
  const { sendRequest, isLoading } = useFetch();

  useEffect(() => {
    sendRequest(getLanguage.bind(null, languageId.at(0)), setLanguage);
  }, [sendRequest, languageId, setLanguage]);

  const showCodeButton = (
    <button
      className="bg-[#9b2c2c] text-white text-sm sm:font-bold sm:py-1 py-[.1rem] mb-1 px-1 sm:px-2 rounded-[0.25rem] border-none "
      onClick={() => setShowCode((prevState) => !prevState)}
    >
      {showCode ? "Hide the Code" : "Show the Code 👇"}
    </button>
  );

  // console.log(description);
  return (
    <li
      ref={ref}
      className="bg-[#f7fafc] rounded sm:rounded-md my-2 p-1 sm:p-4 shadow-2xl style-none"
    >
      <div className="flex justify-between ">
        <h2 className="text-lg sm:text-xl text-[#2d3748] font-bold ">
          {title.rendered}
        </h2>
        <span className="font-bold text-[.6rem] sm:text-sm text-[#9b2c2c] py-1 px-2 rounded-lg ">
          {!isLoading && language.name}
        </span>
      </div>
      <div
        className="max-w-[70%] text-[0.75rem] sm:text-[0.9rem] text-[#1a202c] mb-2 truncate sm:truncate-none"
        dangerouslySetInnerHTML={{ __html: description.rendered }}
      ></div>
      {showCodeButton}
      <Code
        code={content?.rendered || "Hello World"}
        showCode={showCode}
        language="javascript"
        editable={authenticated}
      />

      <div className="mt-1 flex justify-between">
        <section>
          <span className="cursor-pointer text-[#333] mr-2 font-semibold text-[0.75rem] sm:text-[0.9rem] hover:underline">
            Edit
          </span>
          <span className="cursor-pointer text-[#e33e3e]  font-semibold text-[0.75rem] sm:text-[0.9rem] hover:underline">
            Delete
          </span>
        </section>
        <section>
          <span className=" text-[#565656]  font-semibold text-[.6rem] sm:text-[0.75rem] capitalize">
            {x_author}
          </span>
          <span className=" border-r border-[#565656] mx-1"></span>
          <span className=" text-[#565656]  font-semibold text-[.6rem] sm:text-[0.75rem] ">
            {date}
          </span>
        </section>
      </div>
    </li>
  );
});

export default Snippet;
