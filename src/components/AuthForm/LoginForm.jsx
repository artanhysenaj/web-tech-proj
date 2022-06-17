import React, { useState } from "react";
import Input from "../UI/Input/Input";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let formIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    formIsValid = email.trim().length > 0 && password.trim().length >= 6;
    if (!formIsValid) return;
    props.authFunction({
      email,
      password,
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-[30rem] w-full shadow-[0_10px_60px_1px_rgba(5,5,5,0.3)] my-8 p-4 rounded-lg bg-gradient-to-br from-[#e33e3e] to-[#644e4e]"
    >
      <Input
        inputConfig={{
          label: "Email",
          type: "text",
          id: "email",
          name: "email",
          placeholder: "example@gmail.com",
          //   inputHasError: email.hasError,
          value: email,
          onChange: (event) => setEmail(event.target.value),
          //   onBlur: email.onBlurHandler,
        }}
      />

      <Input
        inputConfig={{
          label: "Password",
          type: "password",
          id: "password",
          name: "password",
          placeholder: "********",
          //   inputHasError: password.hasError,
          value: password,
          onChange: (event) => setPassword(event.target.value),
          //   onBlur: password.onBlurHandler,
        }}
      />

      <div className="flex flex-col justify-center items-center">
        <button
          type="submit"
          className="w-1/2 h-10 py-2 px-3 rounded text-white bg-[#375288] text-[1rem] font-[500] border-none outline-none"
        >
          {props.isLoading ? "Logging in..." : props.authMode}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
