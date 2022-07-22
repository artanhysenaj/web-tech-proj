import React from "react";
import ForgotPasswordForm from "../../components/AuthForm/ForgotPasswordForm";
import Logo from "../../components/UI/Logo/Logo";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import { useFetch } from "../../hooks/use-fetch";
import { forgotPassword } from "../../api/Authentication/Authentication";

const ForgotPasswordPage = (props) => {
  const { sendEmail, validateCode, resetPassword } = forgotPassword;
  const { sendRequest, loading, error } = useFetch();

  const sendCodeToEmailHandler = async (email) => {
    sendRequest(sendEmail(email), (data) => console.log(data));
  };
  const validateCodeHandler = (email, code) => {
    console.log(email, code);
  };
  const resetPasswordHandler = (email, code, password) => {
    console.log(email, code, password);
  };
  return (
    <Wrapper>
      <div className="flex flex-col w-full justify-center items-center my-8">
        <div className="flex justify-center items-center">
          <Logo />
          <div className="ml-4">
            <h2 className="text-2xl font-bold inline">Forgot Password</h2>
            <p>Please enter your email here</p>
          </div>
        </div>

        <ForgotPasswordForm
          sendCodeToEmail={sendCodeToEmailHandler}
          validateCode={validateCodeHandler}
          resetPassword={resetPasswordHandler}
        />
      </div>
    </Wrapper>
  );
};

export default ForgotPasswordPage;
