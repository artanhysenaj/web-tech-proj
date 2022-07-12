import React from "react";
import Spinner from "../Spinner/Spinner";



const LoadingBoundary = ({ loading, children }) => {
  return <div>{loading ? <Spinner className="my-0 h-12" /> : children}</div>;
};

export default LoadingBoundary;
