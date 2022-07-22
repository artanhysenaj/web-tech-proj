import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFetch } from "../../hooks/use-fetch";
import { login } from "../../api/Authentication/Authentication";
import LoginForm from "../../components/AuthForm/LoginForm";
import Logo from "../../components/UI/Logo/Logo";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import { useAuthContext } from "../../store/AuthContext/AuthContext";
const LoginPage = (props) => {
  const navigate = useNavigate();
  const context = useAuthContext();
  const { authenticated } = context;
  const { sendRequest: fetchLogin, loading } = useFetch();

  useEffect(() => {
    // if (error) toast.error(error.code || "Something went wrong");
    if (authenticated && !loading) navigate("/");
  }, [navigate, authenticated, loading]);

  const loginHandler = async (data) => {
    fetchLogin(
      () => login(data.email, data.password),
      (data) => {
        context.login(data);
        toast.success("Login Successful");
      }
    );
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
        <LoginForm isLoading={loading} authFunction={loginHandler} />
        <div>
          <p>
            <span
              onClick={() => navigate("/forgot-password")}
              className="text-[#37bdf8] cursor-pointer hover:underline"
            >
              Forgot my password
            </span>{" "}
            <b>or</b>{" "}
            <span
              className="text-[#37bdf8] cursor-pointer hover:underline"
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
