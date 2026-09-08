import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="app-layout">
      <Navbar />

      <div className="page-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
