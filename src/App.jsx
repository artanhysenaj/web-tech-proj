import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "./store/AuthContext/AuthContext";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";

import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import BlogPage from "./pages/Blog/Blogs";
import Blog from "./pages/Blog/Blog";

function App() {
  const { loginOnReload } = useAuthContext();
  //persist user on reload
  useEffect(() => {
    loginOnReload();
  }, [loginOnReload]);

  return (
    <>
      <div className="max-w-[900px] mx-auto">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:blogId" element={<Blog />} />
            <Route path="/languages" element={<h1>languages</h1>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
