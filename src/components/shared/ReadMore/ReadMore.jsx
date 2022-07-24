import React, { useState } from "react";

const ReadMore = ({ children, className, maxCharacters = 30 }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={className}>
      {isReadMore ? text.slice(0, maxCharacters) : text}
      <span
        onClick={toggleReadMore}
        className="italic font-medium text-gray-100 cursor-pointer"
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export default ReadMore;
