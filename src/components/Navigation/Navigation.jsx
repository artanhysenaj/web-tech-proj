import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavMobile from "./NavComponents/NavMobile";
import NavItem from "./NavComponents/NavItem";
import Logo from "./../UI/Logo/Logo";
import { useAuthContext } from "../../store/AuthContext/auth-context";
import { useCallback } from "react";
const Navigation = (props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { authenticated, logout, user } = useAuthContext();

  const onCloseMobileNavHandler = useCallback(
    () => setShowMobileNav(false),
    []
  );
  const onOpenMobileNavHandler = () => setShowMobileNav(true);

  return (
    <nav className="relative w-full h-full sm:h-[70px] flex justify-between items-center ">
      <Logo />

      <FontAwesomeIcon
        icon={faBars}
        className="mr-2 text-xl sm:text-3xl md:hidden"
        onClick={onOpenMobileNavHandler}
      />

      <NavMobile
        showMobileNav={showMobileNav}
        closeNav={onCloseMobileNavHandler}
      />

      <ul className="hidden md:flex md:gap-4">
        <NavItem to="/" routeName="Home" />
        <NavItem to="/blog" routeName="Blog" />
        <NavItem to="/language" routeName="Language" />
        <NavItem to="/about" routeName="About" />
      </ul>

      {/* seachbar somwhere around here */}

      {authenticated && (
        <div className="hidden md:flex flex-row-reverse items-center">
          <img
            onClick={logout}
            className="mx-2 w-8 h-8 sm:w-12 sm:h-12 rounded-full ring-2 ring-offset-4 ring-[#ffffff] ring-offset-[#e53e3e] hover:cursor-pointer hover:ring-0
          hover:ring-offset-0 hover:scale-125 transition-all duration-200"
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="user profile"
          />
          <p className="mr-2 invisible sm:visible">{user.user_display_name}</p>
        </div>
      )}

      {!authenticated && (
        <ul className="hidden md:flex gap-2">
          <Link
            className="px-3 py-1 rounded border hover:bg-white hover:text-[#333] transition-all duration-200"
            to="/login"
          >
            Sign-In
          </Link>
          <Link
            className="bg-[#ffffff] px-3 py-1 rounded text-[#333] hover:bg-transparent border hover:text-white  transition-all duration-200"
            to="/register"
          >
            Sign-Up
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
