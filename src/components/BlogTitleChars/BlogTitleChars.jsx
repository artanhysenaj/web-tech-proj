import React from "react";

export const BlogTitleChars = ({ data }) => {
  const firstChar = data.split(" ");
  return (
    <div className="bg-red-300 w-full h-full flex items-center justify-center text-xl font-semibold rounded-full text-white">
      {firstChar.map((el, idx) => {
        return <span key={idx + "char"}>{el.charAt(0).toUpperCase()}</span>;
      })}
    </div>
  );
};
