import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../UI/Logo/Logo";
const Footer = (props) => {
  return (
    <footer className="sm:max-h-22 flex flex-col sm:flex-row justify-around items-center border-t-2 border-gray-300 max-w-[#900] mx-2 sm:mx-0 p-6 ">
      <Logo />
      <ul className="text-center my-3 font-bold md:flex gap-4">
        <li className="hover:underline hover:cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline hover:cursor-pointer">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="hover:underline hover:cursor-pointer">
          <Link to="/about"></Link>About
        </li>
      </ul>
      <section>
        <h2 className="text-center">Errday Snippets</h2>
        <p className="text-gray-300 text-center text-sm italic underline">
          All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
