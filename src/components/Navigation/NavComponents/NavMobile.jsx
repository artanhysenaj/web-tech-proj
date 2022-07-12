import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { useAuthContext } from "../../../store/AuthContext/AuthContext";
import { useEffect } from "react";
import Button from "../../UI/Button/Button";
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
              onClick={() => {}}
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
          <Button variant="outline">
            <Link className=" text-sm" to="/login">
              Sign-In
            </Link>
          </Button>
          <Button>
            <Link className="text-sm" to="/register">
              Sign-Up
            </Link>
          </Button>
        </ul>
      )}

      {authenticated && (
        <Button
          onClick={() => {
            logout();
            closeNav();
          }}
          variant="outline"
          className="text-sm mt-10"
          label="Logout"
        />
      )}
    </div>
  );
};

export default NavMobile;
