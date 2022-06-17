import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFetch } from "./../hooks/use-fetch";
import { login } from "../api/Authentication/Authentication";
import LoginForm from "../components/AuthForm/LoginForm";
import Logo from "../components/UI/Logo/Logo";
import Wrapper from "../components/UI/Wrapper/Wrapper";
import { authContext } from "../store/AuthContext/auth-context";
const LoginPage = (props) => {
  const navigate = useNavigate();
  const context = useContext(authContext);
  const { authenticated } = context;
  const { sendRequest: fetchLogin, loading, error } = useFetch();
  let loaderRef = useRef();
  useEffect(() => {
    if (authenticated) {
      navigate("/");
    }
  }, [navigate, authenticated]);
  useEffect(() => {
    if (loading) {
      loaderRef.current = toast.loading("Logging in...", {
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
        render: "Logged in successfully",
        type: "success",
        isLoading: loading,
        autoClose: true,
      });
    }
  }, [loading, error]);

  const loginHandler = async (data) => {
    fetchLogin(login.bind(null, data.email, data.password), context.login);
  };

  return (
    <Wrapper>
      <div className="flex flex-col w-full justify-center items-center my-8">
        <div className="flex justify-center items-center">
          <Logo />
          <div className="ml-4">
            <h2 className="text-2xl font-bold inline">Sign-In</h2>
            <p>and interact with your snippets</p>
          </div>
        </div>
        <LoginForm
          isLoading={loading}
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
