import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LanguagePage from "./pages/Language/LanguagePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";
import BlogPage from "./pages/Blog/Blogs";
import Blog from "./pages/Blog/Blog";
import DashboardPage from "./pages/User/DashboardPage";

function App() {
  return (
    <>
      <div className="max-w-[900px] mx-auto">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:blogId" element={<Blog />} />
            <Route path="/languages/:language" element={<LanguagePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />}>
              <Route path="settings" element={<h1>setr</h1>} />
              <Route path="my-snippets" element={<h1>snippets</h1>} />
            </Route>
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
