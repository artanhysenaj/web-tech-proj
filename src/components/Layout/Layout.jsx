import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "./Footer/Footer";
const Layout = (props) => {
  return (
    <>
      <header className="m-2 sm:my-4 mb-6 sm:mb-12">
        <Navigation />
      </header>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
