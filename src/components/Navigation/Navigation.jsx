import React from "react";
import NavItem from "./NavItem";
import Logo from "./../UI/Logo/Logo";
const Navigation = (props) => {
  return (
    <nav className="w-full sm:h-[70px] lg:flex justify-between items-center">
      <Logo />

      <ul className="flex ">
        <NavItem to="/" routeName="Home" />
        <NavItem to="/blog" routeName="Blog" />
        <NavItem to="/page" routeName="PAge" />
        <NavItem to="/page" routeName="OPAage" />
      </ul>

      <ul className="flex">
        <NavItem to="/login" routeName="Sign In" />
        <NavItem to="/register" routeName="Sign Up" />
      </ul>
    </nav>
  );
};

export default Navigation;
