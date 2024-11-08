import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


const MainLayout = () => {
  const location = useLocation();
  return (
    <>
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
