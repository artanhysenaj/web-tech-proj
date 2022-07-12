import React from "react";
import { NavLink } from "react-router-dom";
const NavItem = (props) => {
  const { to, routeName } = props;
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          ` md:py-2  text-white md:bg-transparent md:p-0 border-b-2 border-b-transparent
          md:text-base text-sm 
            ${isActive && "border-b-white"}`
        }
        to={to}
      >
        {routeName}
      </NavLink>
    </li>
  );
};

export default NavItem;
