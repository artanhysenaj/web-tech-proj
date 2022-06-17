import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/UI/Logo/Logo";
import Wrapper from "../components/UI/Wrapper/Wrapper";
const NotFoundPage = (props) => {
  return (
    <Wrapper>
      <section className="flex flex-col md:flex-row justify-center items-center h-[65vh]">
        <h1 className="text-6xl sm:text-[100px] mx-auto text-center">404</h1>
        <div className="md:border-r-2 md:h-52 border-b-2"></div>
        <section className="mx-auto">
          <div className="invisible md:visible">
            <Logo />
          </div>
          <h2 className="text-2xlsm:text-4xl mb-6 sm:my-10">
            Sorry, this page does not exist.
          </h2>
          <Link
            to="/"
            className="px-4 py-3 bg-[#344] rounded hover:cursor-pointer"
          >
            Go Back
          </Link>
        </section>
      </section>
    </Wrapper>
  );
};

export default NotFoundPage;
