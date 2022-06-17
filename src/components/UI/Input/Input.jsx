import React from "react";
const Input = (props) => {
  const { inputConfig } = props;
  const { label, inputHasError, errorMessage, ...config } = inputConfig;
  return (
    <div className="my-4">
      <label
        className="block text-[#fff5f5] text-[1rem] font-bold "
        htmlFor={inputConfig.id}
      >
        {label}
        {inputHasError && (
          <span className="font-[400] text-[#d2be4b] transition-all ease-out">
            {" "}
            {errorMessage ? errorMessage : "is invalid"}
          </span>
        )}
      </label>
      <input
        className={`w-full py-2 px-3 transition-all text-[#f5f5f5] border-b-2 bg-transparent outline-none  ${
          inputHasError ? "border-[#d2be4b]" : null
        }`}
        {...config}
      />
    </div>
  );
};

export default Input;
