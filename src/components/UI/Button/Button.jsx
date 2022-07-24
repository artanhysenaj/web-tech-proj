import React from "react";
const Button = (props) => {
  const { variant, className, children, label, ...config } = props;

  const primary = "bg-[#fff] text-[#333] hover:bg-transparent hover:text-white";
  const outline = "bg-transparent text-white hover:bg-white/10 ";
  const variantClass = variant === "outline" ? outline : primary;
  return (
    <button
      className={`${className} ${variantClass} px-3 py-1 rounded border transition-all duration-200`}
      {...config}
    >
      {children}
      {label}
    </button>
  );
};

export default Button;
