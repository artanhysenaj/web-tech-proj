import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
const Logo = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="shadow-[0_10px_60px_5px_rgba(0,0,0,0.3)] rounded-full w-12 sm:w-[70px] hover:cursor-pointer"
    >
      <img className="w-full" src={logo} alt="Errday-snippets" />
    </div>
  );
};

export default Logo;
