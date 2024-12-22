import { Routes, Route } from "react-router";
import HomePage from "../Pages/HomePage";
import BlogPage from "../Pages/BlogPage";
import MainLayout from "../Layout/MainLayout";
import Contact from "../Pages/Contact";
import JoinUs from "../Pages/JoinUs";
import Forum from "../Pages/Forum";

const Router = () => {
  return (
    <Routes>
      {/* Routes that share the MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Register" element={<JoinUs />} />
        <Route path="/forum" element={<Forum />} />
      </Route>
    </Routes>
  );
};

export default Router;
