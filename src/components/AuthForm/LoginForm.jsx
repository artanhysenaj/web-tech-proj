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

  return errors;
};

const LoginForm = (props) => {
  const submitHandler = (values, { setSubmitting }) => {
    setSubmitting(false);
    props.authFunction(values);
  };

  return (
    <div className="max-w-[30rem] w-full shadow-[0_10px_60px_1px_rgba(5,5,5,0.3)] my-8 p-4 rounded-lg bg-[#e33e3e]">
      <Formik
        initialValues={{
          email: "",
          password: "",
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
            <Input
              inputConfig={{
                label: "Email or username",
                type: "text",
                id: "email",
                name: "email",
                placeholder: "example@gmail.com",
                inputHasError: errors.email && touched.email,
                errorMessage: errors.email,
                value: values.firstName,
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
                inputHasError: errors.password && touched.password,
                errorMessage: errors.password,
                value: values.password,
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
                {props.isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
