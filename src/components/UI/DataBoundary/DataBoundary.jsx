import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Spinner from "../Spinner/Spinner";
const DataBoundary = (props) => {
  if (props.error && !props.loading)
    return <ErrorBoundary status="404" message={props.error} />;
  if ((!props.data || props.data.length === 0) && !props.loading)
    return <ErrorBoundary status="404" message="No data was found" />;
  return (
    <>
      {props.children}

      {props.loading && <Spinner />}
    </>
  );
};

export default DataBoundary;
