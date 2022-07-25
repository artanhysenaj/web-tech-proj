import Modal from "../../../UI/Modal/Modal";
import React from "react";
import Button from "../../../UI/Button/Button";
import { Formik, Form } from "formik";
import Field from "../../../Snippet/SnippetForm/Field";
import { useAuthContext } from "../../../../store/AuthContext/AuthContext";

const validateValues = (values) => {
  const isEmpty = (value) => value.trim().length === 0;
  const errors = {};
  for (let key in values) if (isEmpty(values[key])) errors[key] = "is empty";

  return errors;
};

const EditUserModal = ({ onClose, show, loading, onSubmit }) => {
  const { user } = useAuthContext();

  const submitHandler = (values, { setSubmitting }) => {
    const newUserData = {
      ...values,
      name: `${values.firstName} ${values.lastName}`,
    };
    setSubmitting(false);
    onSubmit(newUserData);
  };
  if (!show) return null;
  return (
    <Modal
      onClose={onClose}
      className="text-black lg:w-[400px] w-[95%] mx-[2.5%] pb-4 md:mx-[5%] lg:mx-0 rounded fixed top-12
      md:left-[calc(50%-200px)] shadow-2xl overflow-y-auto bg-gradient-to-br from-[#e33e3e] to-[#614925]  "
    >
      <div className="flex justify-center items-center my-4 text-white">
        <div className="ml-4">
          <h2 className="md:text-2xl text-lg font-bold inline">Edit profile</h2>
          <p className="text-xs md:text-base">Edit your information below</p>
        </div>
      </div>
      <div className="w-full p-4 text-white">
        <Formik
          initialValues={{
            firstName: user?.fullName?.split(" ")[0] ?? "",
            lastName: user?.fullName?.split(" ")[1] ?? "",
            email: user?.email ?? "",
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
              <Field label="firstName">
                <input
                  className={`${
                    errors.firstName && touched.firstName
                      ? "!border-yellow-400"
                      : ""
                  } w-full p-2 bg-gray-100/25 border border-gray-100/40 rounded focus:border-gray-100 outline-none
                  transition duration-150 ease text-sm md:text-base `}
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>
              <Field label="lastName">
                <input
                  className={`${
                    errors.lastName && touched.lastName
                      ? "!border-yellow-400"
                      : ""
                  } w-full p-2 bg-gray-100/25 border border-gray-100/40 rounded focus:border-gray-100 outline-none
                  transition duration-150 ease text-sm md:text-base `}
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>
              <Field label="email">
                <input
                  className={`${
                    errors.email && touched.email ? "!border-yellow-400" : ""
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

              <div className="flex justify-center md:justify-end gap-4 mt-4 md:mr-2">
                <Button
                  type="button"
                  variant="outline"
                  className="hover:!bg-gray-200/20 hover:!text-white"
                  onClick={onClose}
                  label="Cancel"
                />
                <Button
                  type="submit"
                  variant="outline"
                  disabled={isSubmitting}
                  className="hover:!bg-[#219653]/40 !text-[#36ff8d] border-[#37eb85c5]"
                  loading={loading}
                  label="Save"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default EditUserModal;
