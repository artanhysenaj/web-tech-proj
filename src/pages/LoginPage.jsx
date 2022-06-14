import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../api/Authentication/Authentication";
import AuthenticateForm from "../components/AuthForm/AuthForm";
import Logo from "../components/UI/Logo/Logo";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import { authContext } from "../store/AuthContext/auth-context";
const LoginPage = (props) => {
  const navigate = useNavigate();
  const context = useContext(authContext);
  console.log(context);

  const loginHandler = async (data) => {
    const response = await login(data.email, data.password);
    context.login(response);
  };

  return (
    <Wrapper>
      <div className="flex flex-col w-full justify-center items-center my-8">
        <div className="flex justify-center items-center">
          <Logo />
          <h2 className="text-2xl font-bold inline mt-4 ml-4">Sign-In</h2>
        </div>
        <AuthenticateForm
          isLoading={false}
          authMode="Login"
          authFunction={loginHandler}
        />
        <div>
          <p>
            <span className="text-[#37bdf8] cursor-pointer">
              Forgot my password
            </span>{" "}
            <b>or</b>{" "}
            <span
              className="text-[#37bdf8] cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Don't have an account?
            </span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
