import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Formik, Form } from "formik";
import Field from "./Field";
import Button from "../../UI/Button/Button";
import { languages } from "../../../data/helperData";

const validateValues = (values) => {
  const isEmpty = (value) => value.trim().length === 0;
  const errors = {};
  for (let key in values) if (isEmpty(values[key])) errors[key] = "is empty";
  return errors;
};

const SnippetForm = ({ onClose, loading, onSubmit, snippet }) => {
  const submitHandler = (values, { setSubmitting }) => {
    const newSnippet = {
      title: values.title,
      content: values.content,
      fields: {
        author: snippet?.acf.author ?? snippet?.author,
        language: values.language,
      },
      excerpt: values.description,
    };
    setSubmitting(false);
    onSubmit(newSnippet);
  };
  return (
    <div className="w-full p-4 text-white">
      <Formik
        initialValues={{
          title: snippet?.title.rendered ?? "",
          language: snippet?.acf.language ?? "text",
          description: snippet?.excerpt.rendered ?? "",
          content: snippet?.content.rendered ?? "",
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
          <Form className="">
            <div className="md:flex gap-4">
              <Field label="title">
                <input
                  className={`${
                    errors.title && touched.title ? "!border-yellow-400" : ""
                  } w-full p-2 bg-gray-100/25 border border-gray-100/40 rounded focus:border-gray-100 outline-none
                  transition duration-150 ease text-sm md:text-base `}
                  type="text"
                  name="title"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Field>

              <Field label="language">
                <select
                  value={values.language}
                  name="language"
                  id="language"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    errors.language && touched.language
                      ? "!border-yellow-400"
                      : ""
                  } w-full p-2 bg-gray-100/25 border border-gray-100/40 rounded focus:border-gray-100 outline-none
                  transition duration-150 ease text-sm md:text-base`}
                >
                  {languages.map((language, index) => (
                    <option
                      className="bg-[#b96f63] text-sm md:text-base"
                      key={index}
                      value={language}
                    >
                      {language}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="description">
              <textarea
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                name="description"
                id="description"
                className={`${
                  errors.description && touched.description
                    ? "!border-yellow-400"
                    : ""
                } w-full min-h-[100px] bg-gray-100/25 border border-gray-100/40 rounded focus:border-gray-100 outline-none
                transition p-2 duration-150 ease text-sm md:text-base`}
              ></textarea>
            </Field>

            <Field label="content">
              <CodeEditor
                id="content"
                name="content"
                value={values.content}
                language={values.language}
                placeholder="Please enter your snippet code here"
                onChange={handleChange}
                onBlur={handleBlur}
                padding={15}
                className={`${
                  errors.content && touched.content ? "!border-yellow-400" : ""
                } transition duration-150 ease rounded bg-[#161b22] border border-gray-100/20 focus-within:border-gray-100 `}
                style={{
                  minHeight: "150px",
                  fontSize: 13,
                  fontFamily:
                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                }}
              />
            </Field>

            <div className="flex justify-center md:justify-end gap-4 mr-2">
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
                label="Submit"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SnippetForm;
