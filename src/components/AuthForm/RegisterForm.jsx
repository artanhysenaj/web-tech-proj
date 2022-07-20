import React from "react";
import { Form, Formik } from "formik";
import Input from "../UI/Input/Input";

const validateValues = (values) => {
  const isEmpty = (value) => value.trim().length === 0;
  const errors = {};

  for (let key in values) {
    if (isEmpty(values[key])) errors[key] = "is empty";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    errors.email = "Invalid email address";

  if (values.password !== values.confirmPassword)
    errors.confirmPassword = "Passwords do not match";

  return errors;
};

const RegisterForm = ({ isLoading, onRegister }) => {
  const submitHandler = (values, { setSubmitting }) => {
    setSubmitting(false);
    onRegister(values);
  };

  return (
    <div className="max-w-[30rem] w-full shadow-[0_10px_60px_1px_rgba(5,5,5,0.3)] my-8 p-4 rounded-lg bg-[#e33e3e]">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validate={validateValues}
        onSubmit={submitHandler}
      >
        {({
          values,
          handleBlur,
          errors,
          touched,
          handleChange,
          isSubmitting,
        }) => (
          <Form>
            <div className="flex justify-between">
              <Input
                inputConfig={{
                  label: "First Name",
                  type: "text",
                  id: "firstName",
                  name: "firstName",
                  placeholder: "John",
                  required: true,
                  inputHasError: errors.firstName && touched.firstName,
                  errorMessage: errors.firstName,
                  value: values.firstName,
                  onChange: handleChange,
                  onBlur: handleBlur,
                }}
              />
              <Input
                inputConfig={{
                  label: "Last Name",
                  type: "text",
                  id: "lastName",
                  name: "lastName",
                  placeholder: "Doe",
                  required: true,
                  inputHasError: errors.lastName && touched.lastName,
                  errorMessage: errors.lastName,
                  value: values.lastName,
                  onChange: handleChange,
                  onBlur: handleBlur,
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
                inputHasError: errors.email && touched.email,
                errorMessage: errors.email,
                value: values.email,
                onChange: handleChange,
                onBlur: handleBlur,
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
                inputHasError: errors.username && touched.username,
                errorMessage: errors.username,
                value: values.username,
                onChange: handleChange,
                onBlur: handleBlur,
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
                inputHasError: errors.password && touched.password,
                errorMessage: errors.password,
                value: values.password,
                onChange: handleChange,
                onBlur: handleBlur,
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
                inputHasError:
                  errors.confirmPassword && touched.confirmPassword,
                errorMessage: errors.confirmPassword,
                value: values.confirmPassword,
                onChange: handleChange,
                onBlur: handleBlur,
              }}
            />

            <div className="flex flex-col justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 h-10 py-2 px-3 rounded text-white bg-[#375288] text-[1rem] font-[500] border-none outline-none"
              >
                {isLoading ? "Loading..." : "Register"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
