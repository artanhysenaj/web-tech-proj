import React, { useState } from "react";
import { Formik, Form } from "formik";
import { forgotPassword } from "../../api/Authentication/Authentication";
import Input from "../UI/Input/Input";

const validateValues = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};
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
    <div className="max-w-[30rem] w-full shadow-[0_10px_60px_1px_rgba(5,5,5,0.3)] my-8 p-4 rounded-lg bg-[#e33e3e]">
      <Formik
        initialValues={{ email: "", code: "", password: "" }}
        validate={validateValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
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
            <Input
              inputConfig={{
                label: "Email",
                type: "email",
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

            {showCodeInput && (
              <Input
                inputConfig={{
                  label: "Code",
                  type: "text",
                  id: "code",
                  name: "code",
                  placeholder: "XCYZ",
                  required: true,
                  inputHasError: errors.code && touched.code,
                  errorMessage: errors.code,
                  value: values.code,
                  onChange: handleChange,
                  onBlur: handleBlur,
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
                  inputHasError: errors.password && touched.password,
                  errorMessage: errors.password,
                  value: values.password,
                  onChange: handleChange,
                  onBlur: handleBlur,
                }}
              />
            )}
            <div className="flex flex-col justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 h-10 py-2 px-3 rounded text-white bg-[#375288] text-[1rem] font-[500] border-none outline-none"
              >
                {buttonLabel}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;
