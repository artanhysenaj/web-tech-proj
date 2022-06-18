import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import Wrapper from "../Wrapper/Wrapper";
const ErrorBoundary = (props) => {
  const navigate = useNavigate();
  const { status, message, showBackButton } = props;
  return (
    <Wrapper>
      <section className="flex flex-col md:flex-row justify-center items-center max-h-[50vh] py-20">
        <h1 className="text-6xl sm:text-[100px] mx-auto text-center">
          {status}
        </h1>
        <div className="md:border-r-2 md:h-52 border-b-2"></div>
        <section className="mx-auto">
          <div className="invisible md:visible">
            <Logo />
          </div>
          <h2 className=" sm:text-xl mb-6 sm:my-10">{message}</h2>
          {showBackButton && (
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-3 bg-[#344] rounded hover:cursor-pointer"
            >
              Go Back
            </button>
          )}
        </section>
      </section>
    </Wrapper>
  );
};

export default ErrorBoundary;
