import React from "react";
const Input = (props) => {
  const { inputConfig } = props;
  const { label, inputHasError, errorMessage, ...config } = inputConfig;
  return (
    <div className="my-4">
      <label
        className="block text-[#fff5f5] text-[1rem] font-bold mb-1"
        htmlFor={inputConfig.id}
      >
        {label}
        {inputHasError && (
          <span className="font-[400] text-[rgb(255, 238, 0)] transition-all ease-out">
            {" "}
            {errorMessage ? errorMessage : "is invalid"}
          </span>
        )}
      </label>
      <input
        className={`w-full py-2 px-3 rounded text-[#4a5568] border-none outline-none focus:border-b ${
          inputHasError
            ? "outline-[1.5px_solid_rgb(255,238,0)_!important]"
            : null
        }`}
        {...config}
      />
    </div>
  );
};

export default Input;
