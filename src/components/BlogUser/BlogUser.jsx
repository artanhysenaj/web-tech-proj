import React from "react";

export const BlogUser = ({ data }) => {
  return (
    <div className="flex mb-10">
      <div className="w-[50px] h-[50px] bg-red-300 rounded-full"></div>
      <div className="ml-4 text-base">
        <h5 className="font-semibold text-base">
          {data?.display_name || "loading.."}
        </h5>
        <p className="created-date text-sm">
          {data?.user_registered.split(" ")[0] || "..."}
        </p>
      </div>
    </div>
  );
};
