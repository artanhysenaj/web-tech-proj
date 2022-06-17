import React, { useState } from "react";
import Input from "../UI/Input/Input";

const isEmpty = (value) => value.trim().length === 0;

const RegisterForm = (props) => {
  const [email, setEmail] = useState({
    value: "",
    hasError: false,
  });
  const [userName, setUserName] = useState({
    value: "",
    hasError: false,
  });
  const [password, setPassword] = useState({
    value: "",
    hasError: false,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    hasError: false,
  });
  const [firstName, setFirstName] = useState({
    value: "",
    hasError: false,
  });
  const [lastName, setLastName] = useState({
    value: "",
    hasError: false,
  });

  const [formIsValid, setFormIsValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    setPasswordsMatch(password.value === confirmPassword.value);
    setFormIsValid(
      !isEmpty(firstName.value) &&
        !isEmpty(lastName.value) &&
        !isEmpty(email.value) &&
        !isEmpty(userName.value) &&
        !isEmpty(password.value) &&
        !isEmpty(confirmPassword.value) &&
        passwordsMatch
    );

    if (!formIsValid) return;
    props.authFunction({
      email: email.value,
      userName: userName.value,
      password: password.value,
      firstName: firstName.value,
      lastName: lastName.value,
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-[30rem] w-full shadow-[0_10px_60px_1px_rgba(5,5,5,0.3)] my-8 p-4 rounded-lg bg-[#e33e3e]"
    >
      <div className="flex justify-between">
        <Input
          inputConfig={{
            label: "First Name",
            type: "test",
            id: "firstName",
            name: "firstName",
            placeholder: "John",
            required: true,
            //   inputHasError: password.hasError,
            value: firstName.value,
            onChange: (event) =>
              setFirstName((prevState) => ({
                ...prevState,
                value: event.target.value,
              })),
            //   onBlur: password.onBlurHandler,
          }}
        />
        <Input
          inputConfig={{
            label: "Last Name",
            type: "test",
            id: "lastName",
            name: "lastName",
            placeholder: "Doe",
            required: true,
            //   inputHasError: password.hasError,
            value: lastName.value,
            onChange: (event) =>
              setLastName((prevState) => ({
                ...prevState,
                value: event.target.value,
              })),
            //   onBlur: password.onBlurHandler,
          }}
        />
      </div>
      <Input
        inputConfig={{
          label: "Email",
          type: "text",
          id: "email",
          name: "email",
          placeholder: "example@gmail.com",
          required: true,
          //   inputHasError: email.hasError,
          value: email.value,
          onChange: (event) =>
            setEmail((prevState) => ({
              ...prevState,
              value: event.target.value,
            })),
          //   onBlur: email.onBlurHandler,
        }}
      />
      <Input
        inputConfig={{
          label: "Username",
          type: "text",
          id: "username",
          name: "username",
          placeholder: "user-name",
          required: true,
          //   inputHasError: email.hasError,
          value: userName.value,
          onChange: (event) =>
            setUserName((prevState) => ({
              ...prevState,
              value: event.target.value,
            })),
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
          required: true,
          //   inputHasError: password.hasError,
          value: password.value,
          onChange: (event) =>
            setPassword((prevState) => ({
              ...prevState,
              value: event.target.value,
            })),
          //   onBlur: password.onBlurHandler,
        }}
      />
      <Input
        inputConfig={{
          label: "Confirm Password",
          type: "password",
          id: "confirmPassword",
          name: "confirmPassword",
          placeholder: "********",
          required: true,
          inputHasError: !passwordsMatch,
          errorMessage: "Passwords do not match",
          value: confirmPassword.value,
          onChange: (event) => {
            setConfirmPassword((prevState) => ({
              ...prevState,
              value: event.target.value,
            }));
          },
          onBlur: () => setPasswordsMatch(true),
        }}
      />

      <div className="flex flex-col justify-center items-center">
        <button
          type="submit"
          className="w-1/2 py-2 px-3 rounded text-white bg-[#3c5c9c] text-[1rem] font-[500] border-none outline-none"
        >
          {props.isLoading ? "Loading..." : props.authMode}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
