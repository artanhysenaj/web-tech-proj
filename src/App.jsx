import { useContext, useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { authContext } from "./store/AuthContext/auth-context";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import Dialog from "./components/UI/Dialog/Dialog";

function App() {
  const context = useContext(authContext);
  const { loginOnReload } = context;
  const [showDialog, setShowDialog] = useState(false);
  //persist user on reload
  useEffect(() => {
    loginOnReload();
  }, [loginOnReload]);

  return (
    <>
      <button onClick={() => setShowDialog(true)}>open</button>
      {showDialog && (
        <Dialog
          icon="info"
          title="Delete this snippet named john doe?"
          message="Are you sure you want to delete React Functional Component ? You can't undo this action."
          onConfirm={() => console.log("confirm")}
          onClose={() => setShowDialog(false)}
        />
      )}
      <div className="App max-w-[900px] mx-auto">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
