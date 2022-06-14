import React from "react";
import logo from "../../../assets/logo.png";
const Logo = (props) => {
  return (
    <div className="shadow-[0_10px_60px_5px_rgba(0,0,0,0.3)] rounded-full mt-4 max-w-[70px]">
      <img className="w-[70px]" src={logo} alt="Errday-snippets" />
    </div>
  );
};

export default Logo;
