import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const MainLayout = () => {
  const location = useLocation();

  const showHero = location.pathname === "/";

  return (
    <div className="h-screen">
      <Header />
      {showHero && <Hero />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
