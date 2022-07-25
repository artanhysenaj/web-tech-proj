import React from "react";
import ForgotPasswordForm from "../../components/AuthForm/ForgotPasswordForm";
import Logo from "../../components/UI/Logo/Logo";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import { useFetch } from "../../hooks/use-fetch";
import { forgotPassword } from "../../api/Authentication/Authentication";
import { toast } from "react-toastify";

const ForgotPasswordPage = (props) => {
  const { sendEmail, validateCode, resetPassword } = forgotPassword;
  const { sendRequest, loading } = useFetch();

  let continueReset = () => {};
  const showCodeInputHandler = (continueFunction) =>
    (continueReset = continueFunction);
  const showPasswordInputHandler = (continueFunction) =>
    (continueReset = continueFunction);
  const showLoginPageHandler = (continueFunction) =>
    (continueReset = continueFunction);

  const sendCodeToEmailHandler = (email) => {
    sendRequest(
      () => sendEmail(email),
      (data) => {
        continueReset();
        toast.success(data.message);
      }
    );
  };
  const validateCodeHandler = (email, code) => {
    sendRequest(
      () => validateCode(email, code),
      (data) => {
        continueReset();
        toast.success(data.message);
      }
    );
  };
  const resetPasswordHandler = (email, code, password) => {
    sendRequest(
      () => resetPassword(email, code, password),
      (data) => {
        continueReset();
        toast.success(data.message);
      }
    );
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
          onShowCodeInput={showCodeInputHandler}
          onShowPasswordInput={showPasswordInputHandler}
          onShowLoginPage={showLoginPageHandler}
          loading={loading}
        />
      </div>
    </Wrapper>
  );
};

export default ForgotPasswordPage;
