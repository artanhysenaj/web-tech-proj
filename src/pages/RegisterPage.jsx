import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFetch } from "./../hooks/use-fetch";
import { register } from "../api/Authentication/Authentication";
import Logo from "../components/UI/Logo/Logo";
import RegisterForm from "../components/AuthForm/RegisterForm";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import { useAuthContext } from "../store/AuthContext/AuthContext";
import { useEffect } from "react";
const RegisterPage = (props) => {
  const navigate = useNavigate();
  const context = useAuthContext();
  const { authenticated } = context;
  const {
    sendRequest: fetchRegister,
    loading,
    error,
  } = useFetch({ toasts: true });
  let loaderRef = useRef();

  useEffect(() => {
    if (authenticated) {
      navigate("/");
    }
  }, [navigate, authenticated]);
  useEffect(() => {
    if (loading) {
      loaderRef.current = toast.loading("Signing Up...", {
        customId: "loader",
      });
    } else if (!loading && error) {
      toast.update(loaderRef.current, {
        render: error.message || "Something went wrong",
        type: "error",
        isLoading: loading,
        autoClose: true,
      });
    } else {
      toast.update(loaderRef.current, {
        render: "Try logging in now",
        type: "info",
        isLoading: loading,
        autoClose: true,
      });
    }
  }, [loading, error]);

  const registerHandler = async (data) => {
    fetchRegister(
      register.bind(
        null,
        data.firstName,
        data.lastName,
        data.userName,
        data.email,
        data.password
      )
    );
  };

  return (
    <Wrapper>
      <div className="flex flex-col w-full justify-center items-center my-8">
        <div className="flex justify-center items-center">
          <Logo />
          <div className="ml-2">
            <h2 className="text-2xl font-bold inline ">Sign-Up</h2>
            <p className="text leading-5">
              Start creating your own snippets <br /> and help the community
            </p>
          </div>
        </div>
        <RegisterForm
          isLoading={loading}
          authMode="Register"
          authFunction={registerHandler}
        />
        <div>
          <span
            onClick={() => navigate("/login")}
            className="text-[#37bdf8] cursor-pointer hover:underline"
          >
            Sign-in instead
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
