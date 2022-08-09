import React from "react";
const GeneralLoader = (props) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
      <img className="w-1" src="../../../assets/logo.png" alt="preloader" />
    </div>
  );
};

export default GeneralLoader;
