import React from "react";

const PostsList = ({ items, render }) => {
  return (
    <div className="from-transparent to-[#926060c0] bg-gradient-to-r  rounded-md">
      {items.map((item, index) => {
        return render(item, index);
      })}
    </div>
  );
};

export default PostsList;
