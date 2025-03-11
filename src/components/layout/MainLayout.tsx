import { Outlet } from "react-router-dom";
import Footer from "./footer";
import NavBar from "./navbar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
