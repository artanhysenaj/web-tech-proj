import React from "react";
import Button from "../UI/Button/Button";
import { Formik, Form } from "formik";
import Field from "../Snippet/SnippetForm/Field";
import Logo from "../UI/Logo/Logo";

const validateValues = (values) => {
  const isEmpty = (value) => value.trim().length === 0;
  const errors = {};
  for (let key in values) if (isEmpty(values[key])) errors[key] = "is empty";

  return errors;
};
const ContactForm = ({ onSubmit, loading }) => {
  const submitHandler = (values, { setSubmitting }) => {
    setSubmitting(false);
    onSubmit(values);
  };
  return (
    <div>
      <section className="sm:mx-2 md:mx-auto text-gray-700 relative">
        <div className="sm:mx-2 md:mx-auto container px-5 py-24 mx-auto p-2 sm:p-4 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  bg-gradient-to-br from-[#e33e3e] to-[#614925] mb-20 rounded-lg">
          <div className="flex justify-center items-center">
            <Logo />
            <div className="ml-4">
              <h2 className="text-4xl font-bold text-white in-line">
                Contact Us
              </h2>
            </div>
          </div>
          <div className="flex flex-col text-center w-full mb-12">
            <p className="lg:w-2/3 mx-auto mt-5 leading-relaxed text-white">
              For all enquiries, please email us using the form below
            </p>
          </div>
          <div className="w-full p-4 text-white">
            <Formik
              initialValues={{
                fullname: "",
                email: "",
                subject: "",
                message: "",
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
                  <div className="flex">
                    <Field label="fullname">
                      <input
                        className={`${
                          errors.fullname && touched.fullname
                            ? "!border-yellow-400"
                            : ""
                        } w-full p-2 bg-gray-100/25 border border-gray-100/40 rounded focus:border-gray-100 outline-none
                  transition duration-150 ease text-sm md:text-base `}
                        type="text"
                        name="fullname"
                        id="fullname"
                        value={values.fullname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Field>
                    <Field label="email">
                      <input
                        className={`${
                          errors.email && touched.email
                            ? "!border-yellow-400"
                            : ""
                        } w-full p-2 bg-gray-100/25 border border-gray-100/40 rounded focus:border-gray-100 outline-none
                  transition duration-150 ease text-sm md:text-base `}
                        type="text"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Field>
                  </div>
                  <Field label="subject">
                    <input
                      className={`${
                        errors.subject && touched.subject
                          ? "!border-yellow-400"
                          : ""
                      } w-full p-2 bg-gray-100/25 border border-gray-100/40 rounded focus:border-gray-100 outline-none
                  transition duration-150 ease text-sm md:text-base `}
                      type="text"
                      name="subject"
                      id="subject"
                      value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Field>
                  <Field label="message">
                    <textarea
                      className={`${
                        errors.message && touched.message
                          ? "!border-yellow-400"
                          : ""
                      } w-full p-2 bg-gray-100/25 border border-gray-100/40 rounded focus:border-gray-100 outline-none
                  transition duration-150 ease text-sm md:text-base h-24`}
                      type="text"
                      name="message"
                      id="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                  </Field>

                  <div className="flex justify-center md:justify-end gap-4 mt-4 md:mr-2">
                    <Button
                      type="submit"
                      variant="outline"
                      disabled={isSubmitting}
                      loading={loading}
                      label="Submit"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
