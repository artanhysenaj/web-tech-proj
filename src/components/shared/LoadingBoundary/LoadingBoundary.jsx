import React from "react";
import Spinner from "../Spinner/Spinner";

const LoadingBoundary = ({ loading, children, className, loadingMessage }) => {
  if (loading)
    return (
      <div
        className={`w-full  h-full flex items-center justify-center ${className}`}
      >
        <Spinner loadingText={loadingMessage} />
      </div>
    );

  return children;
};

export default LoadingBoundary;
