import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import AuthContextProvider from "./store/AuthContext/AuthContextProvider";
import "./index.css";
import SnippetsContextProvider from "./store/SnippetsContext/SnippetsContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable={true}
          pauseOnHover={true}
        />
        <SnippetsContextProvider>
          <App />
        </SnippetsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
