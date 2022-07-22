import React from "react";
import { ErrorMessage } from "formik";
const Field = ({ label, children }) => {
  return (
    <div className="p-2 w-full">
      <label className="block text-sm md:text-base capitalize" htmlFor={label}>
        {label}{" "}
        <ErrorMessage
          className="text-yellow-400"
          name={label}
          component="span"
        />
      </label>
      {children}
    </div>
  );
};

export default Field;
