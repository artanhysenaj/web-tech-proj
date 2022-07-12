import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { useAuthContext } from "../../../store/AuthContext/auth-context";
import { useEffect } from "react";
const NavMobile = ({ showMobileNav, closeNav }) => {
  const { authenticated, logout, user } = useAuthContext();
  const firstName = user?.user_display_name.split(" ").at(0);
  const { key } = useLocation();

  useEffect(() => {
    closeNav();
  }, [key, closeNav]);

  if (!showMobileNav) return null;
  return (
    <div className="fixed top-0 bg-[#e53e3e] shadow-2xl shadow-gray-800 -ml-2 w-full h-screen rounded p-3 ">
      <div className="py-3 mb-4 flex justify-between border-b border-[#f4f4f4]/20">
        <div className="flex items-end ">
          {authenticated && (
            <img
              onClick={logout}
              className="w-11 h-11 rounded-full"
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="user profile"
            />
          )}
        </div>

        <FontAwesomeIcon
          onClick={closeNav}
          icon={faX}
          className="shadow-lg text-lg mr-2"
        />
      </div>
      <div>
        <p className="text-base ml-2 text-center">{`Welcome ${
          authenticated ? `back, ${firstName}` : ""
        }`}</p>
      </div>
      <ul className="flex flex-col gap-2 mt-10  pb-6 border-b border-[#f4f4f4]/20">
        <NavItem to="/" routeName="Home" />
        <NavItem to="/blog" routeName="Blog" />
        <NavItem to="/language" routeName="Language" />
        <NavItem to="/about" routeName="About" />
      </ul>

      {!authenticated && (
        <ul className="flex justify-center gap-2 w-full mt-16">
          <Link className="px-2 py-1 text-sm rounded border" to="/login">
            Sign-In
          </Link>
          <Link
            className="bg-[#ffffff] px-3 py-1 rounded text-sm text-[#333] border"
            to="/register"
          >
            Sign-Up
          </Link>
        </ul>
      )}

      {authenticated && (
        <button
          onClick={() => {
            logout();
            closeNav();
          }}
          className="px-2 py-1 text-sm rounded border mt-10"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default NavMobile;
