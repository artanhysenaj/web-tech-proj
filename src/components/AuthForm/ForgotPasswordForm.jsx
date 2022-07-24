import React, { useState } from "react";
import { Formik, Form } from "formik";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = ({
  loading,
  sendCodeToEmail,
  validateCode,
  resetPassword,
  onShowCodeInput,
  onShowPasswordInput,
  onShowLoginPage,
}) => {
  const navigate = useNavigate();
  const [buttonLabel, setButtonLabel] = useState("Send Email");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const onSubmitHandler = (values, { setSubmitting }) => {
    const { email, code, password } = values;
    setSubmitting(false);

    if (showCodeInput && showPasswordInput) {
      resetPassword(email, code, password);
      onShowLoginPage(() => {
        navigate("/login");
      });
    } else if (showCodeInput) {
      validateCode(email, code);
      onShowPasswordInput(() => {
        setButtonLabel("Reset Password");
        setShowPasswordInput(true);
      });
    } else {
      sendCodeToEmail(email);
      onShowCodeInput(() => {
        setButtonLabel("Submit code");
        setShowCodeInput(true);
      });
    }
  };

  return (
    <div className="max-w-[30rem] w-full shadow-[0_10px_60px_1px_rgba(5,5,5,0.3)] my-8 p-4 rounded-lg bg-[#e33e3e]">
      <Formik
        initialValues={{ email: "", code: "", password: "" }}
        onSubmit={onSubmitHandler}
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
                  value: values.password,
                  onChange: handleChange,
                  onBlur: handleBlur,
                }}
              />
            )}
            <div className="flex flex-col justify-center items-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 h-10 py-2 px-3 rounded !text-white !bg-[#375288] hover:!bg-[#2e4166] text-[1rem] font-[500] border-none outline-none"
                loading={loading}
                label={buttonLabel}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;
