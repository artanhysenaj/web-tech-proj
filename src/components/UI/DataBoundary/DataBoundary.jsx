import React from "react";
import Spinner from "../Spinner/Spinner";
const DataBoundary = (props) => {
  if (props.loading) return <Spinner />;
  if (props.error) return <p>Something went wrong</p>;
  if (!props.data || props.data.length === 0) return <p>No data</p>;
  return props.children;
};

export default DataBoundary;
