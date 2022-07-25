import React from "react";

import { Spinner } from "flowbite-react";
const Button = (props) => {
  const { variant, className, children, label, loading, ...config } = props;

  const primary = "bg-[#fff] text-[#333] hover:bg-transparent hover:text-white";
  const outline = "bg-transparent text-white hover:bg-white/10 ";
  const variantClass = variant === "outline" ? outline : primary;
  return (
    <button
      className={`${className} ${variantClass} px-3 py-1 rounded border transition-all duration-200`}
      {...config}
    >
      {children}
      {loading ? <Spinner color="success" /> : label}
    </button>
  );
};

export default Button;
