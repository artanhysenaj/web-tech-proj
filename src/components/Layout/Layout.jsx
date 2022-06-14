import React from "react";
import Navigation from "../Navigation/Navigation";
const Layout = (props) => {
  return (
    <>
      <header className="mb-10">
        <Navigation />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
