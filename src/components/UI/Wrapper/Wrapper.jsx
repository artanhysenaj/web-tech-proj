import React from "react";
const Wrapper = (props) => {
  return (
    <div className="p-4 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)] ">
      {props.children}
    </div>
  );
};

export default Wrapper;
