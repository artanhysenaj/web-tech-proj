import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";
import Logo from "./../UI/Logo/Logo";
import { useContext } from "react";
import { authContext } from "../../store/AuthContext/auth-context";
const Navigation = (props) => {
  const context = useContext(authContext);
  return (
    // <nav className=" px-2 sm:px-4 py-2.5 outline">
    //   <div className="container flex flex-wrap justify-between items-center mx-auto">
    //     <Link to="/" className="flex items-center">
    //       <Logo />
    //       <span className="self-center text-xl font-semibold whitespace-nowrap ml-3">
    //         Errday Snippets
    //       </span>
    //     </Link>
    //     <div className="flex items-center md:order-2">
    //       <button
    //         type="button"
    //         className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    //         id="user-menu-button"
    //         ariaExpanded="false"
    //         dataDropdownToggle="dropdown"
    //       >
    //         <span className="sr-only">Open user menu</span>
    //         <img
    //           className="w-12 h-12 rounded-full"
    //           src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    //           alt="user profile"
    //         />
    //       </button>
    //       {/* <!-- Dropdown menu --> */}
    //       <div
    //         className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    //         id="dropdown"
    //       >
    //         <div className="py-3 px-4">
    //           <span className="block text-sm text-gray-900 dark:text-white">
    //             Bonnie Green
    //           </span>
    //           <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
    //             name@flowbite.com
    //           </span>
    //         </div>
    //         <ul className="py-1" aria-labelledby="dropdown">
    //           <li>
    //             <Link
    //               to="/dashboard"
    //               className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //             >
    //               Dashboard
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to=""
    //               className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //             >
    //               Settings
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to=""
    //               className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //             >
    //               Earnings
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/logout"
    //               className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //             >
    //               Sign out
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <button
    //         data-collapse-toggle="mobile-menu-2"
    //         type="button"
    //         className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="mobile-menu-2"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-6 h-6"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //             clipRule="evenodd"
    //           ></path>
    //         </svg>
    //         <svg
    //           className="hidden w-6 h-6"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //             clipRule="evenodd"
    //           ></path>
    //         </svg>
    //       </button>
    //     </div>

    //     <div
    //       className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
    //       id="mobile-menu-2"
    //     >
    //       <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
    //         <NavItem to="/" routeName="Home" />
    //         <NavItem to="/blog" routeName="Blog" />
    //         <NavItem to="/contact" routeName="Contact" />
    //         <NavItem to="/about" routeName="About" />
    //         <NavItem to="/help" routeName="Help" />
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav className="w-full h-full sm:h-[70px] flex justify-between items-center ">
      <Logo />

      <ul className="hidden sm:flex md:gap-2">
        <NavItem to="/" routeName="Home" />
        <NavItem to="/blog" routeName="Blog" />
        <NavItem to="/language" routeName="Language" />
        <NavItem to="/page" routeName="About" />
      </ul>

      {/* seachbar somwhere around here */}

      {context.authenticated ? (
        <div className="flex flex-row-reverse items-center">
          <img
            onClick={() => context.logout()}
            className="mx-2 w-8 h-8 sm:w-12 sm:h-12 rounded-full ring-2 ring-offset-4 ring-[#ffffff] ring-offset-[#e53e3e] hover:cursor-pointer hover:ring-0
          hover:ring-offset-0 hover:scale-125 transition-all duration-200"
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="user profile"
          />
          <p className="mr-2 invisible sm:visible">
            {context.user.user_display_name}
          </p>
        </div>
      ) : (
        <ul className="flex gap-2">
          <Link
            className="px-3 py-1 rounded border hover:bg-white hover:text-[#333] transition-all duration-200"
            to="/login"
          >
            Sign-In
            {/* <FontAwesomeIcon className="ml-2" icon={faSignIn} /> */}
          </Link>
          <Link
            className="bg-[#ffffff] px-3 py-1 rounded text-[#333] hover:bg-transparent border hover:text-white  transition-all duration-200"
            to="/register"
          >
            Sign-Up
            {/* <FontAwesomeIcon className="ml-2" icon={faSignInAlt} /> */}
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
