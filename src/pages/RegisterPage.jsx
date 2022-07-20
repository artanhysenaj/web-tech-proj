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
  const { authenticated } = useAuthContext();
  const { sendRequest: fetchRegister, loading } = useFetch({ toasts: true });

  useEffect(() => {
    if (authenticated) navigate("/");
  }, [navigate, authenticated]);

  const registerHandler = async (data) => {
    const { firstName, lastName, username, email, password } = data;
    fetchRegister(
      register.bind(null, firstName, lastName, username, email, password),
      () => {
        toast.success("Registered successfully. Try logging in now");
        navigate("/login");
      }
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
        <RegisterForm isLoading={loading} onRegister={registerHandler} />
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
