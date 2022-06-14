import React from "react";
import { NavLink } from "react-router-dom";
const NavItem = (props) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 border-red-400 ml-6" : "ml-6  "
        }
        to={props.to}
      >
        {props.routeName}
      </NavLink>
    </li>
  );
};

export default NavItem;
