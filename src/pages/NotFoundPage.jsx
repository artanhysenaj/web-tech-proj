import React from "react";
import ErrorBoundary from "../components/UI/ErrorBoundary/ErrorBoundary";
const NotFoundPage = (props) => {
  return (
    <ErrorBoundary
      status="404"
      message="Sorry, this page does not exist!"
      showBackButton
    />
  );
};

export default NotFoundPage;
