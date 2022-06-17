import React from "react";
import { NavLink } from "react-router-dom";
const NavItem = (props) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-white block py-2 pr-4 pl-3 text-white md:bg-transparent md:p-0 dark:text-white"
            : "block py-2 pr-4 pl-3 text-white md:bg-transparent md:p-0 dark:text-white border-b-2 border-b-transparent hover:border-white "
        }
        to={props.to}
        aria-current="page"
      >
        {props.routeName}
      </NavLink>
    </li>
  );
};

export default NavItem;
