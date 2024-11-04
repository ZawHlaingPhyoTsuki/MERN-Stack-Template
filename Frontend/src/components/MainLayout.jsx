import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "./Header/Menu";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


const MainLayout = () => {
  const { showMenu } = useContext(StoreContext);
  const location = useLocation();
  return (
    <>
      {showMenu && <Menu />}
      <Header />
      <div className="flex flex-col">
        <div
          className={` m-auto ${
            location.pathname === "/products" ? "w-full" : "w-[80%]"
          }`}
        >
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
