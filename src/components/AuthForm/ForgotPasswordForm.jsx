import React, { useState } from "react";
import { forgotPassword } from "../../api/Authentication/Authentication";
import Input from "../UI/Input/Input";
const ForgotPasswordForm = (props) => {
  const [email, setEmail] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Continue");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [code, setCode] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    forgotPassword
      .sendEmail(email)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    // if (showCodeInput && showPasswordInput) {
    //   props.resetPassword(email, code, password);
    // } else if (showCodeInput) {
    //   props.validateCode(email, code);
    //   setButtonLabel("Reset Password");
    //   setShowPasswordInput(true);
    // } else {
    //   props.sendCodeToEmail(email);
    //   setButtonLabel("Submit");
    //   setShowCodeInput(true);
    // }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-[30rem] w-full shadow-[0_10px_60px_1px_rgba(5,5,5,0.3)] my-8 p-4 rounded-lg bg-[#e33e3e]"
    >
      <Input
        inputConfig={{
          label: "Email",
          type: "email",
          id: "email",
          name: "email",
          placeholder: "example@gmail.com",
          required: true,
          //   inputHasError: password.hasError,
          value: email,
          onChange: (event) => setEmail(event.target.value),
          //   onBlur: password.onBlurHandler,
        }}
      />
      {showCodeInput && (
        <Input
          inputConfig={{
            label: "Code",
            type: "text",
            id: "code",
            name: "code",
            placeholder: "XCYZ",
            required: true,
            //   inputHasError: password.hasError,
            value: code,
            onChange: (event) => setCode(event.target.value),
            //   onBlur: password.onBlurHandler,
          }}
        />
      )}
      {showPasswordInput && (
        <Input
          inputConfig={{
            label: "Password",
            type: "password",
            id: "password",
            name: "password",
            placeholder: "********",
            required: true,
            //   inputHasError: password.hasError,
            value: password,
            onChange: (event) => setPassword(event.target.value),
            //   onBlur: password.onBlurHandler,
          }}
        />
      )}
      <div className="flex flex-col justify-center items-center">
        <button
          type="submit"
          className="w-1/2 h-10 py-2 px-3 rounded text-white bg-[#375288] text-[1rem] font-[500] border-none outline-none"
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
