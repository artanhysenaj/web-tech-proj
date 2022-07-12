import React from "react";
import Spinner from "../Spinner/Spinner";

const LoadingBoundary = ({ loading, children }) => {
  if (loading) return <Spinner className="my-0 h-12" />;
  return <>{children}</>;
};

export default LoadingBoundary;
