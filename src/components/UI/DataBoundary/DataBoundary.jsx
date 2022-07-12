import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Spinner from "../Spinner/Spinner";
const DataBoundary = (props) => {
  const { loading, data, error, children } = props;
  if (error && !loading) return <ErrorBoundary status="404" message={error} />;
  if ((!data || data.length === 0) && !loading)
    return <ErrorBoundary status="404" message="No data was found" />;
  return (
    <>
      {children}
      {loading && <Spinner />}
    </>
  );
};

export default DataBoundary;
