import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import AboutUsPage from "../pages/About-us/AboutUsPage";
import ServicesPage from "../pages/Services/ServicesPage";
import ContactPage from "../pages/Contact/ContactPage";
import ErrorPage from "../components/ErrorPage";
import AllProductsPage from "../pages/AllProducts/AllProductsPage";
import ProductDetailPage from "../pages/ProductDetail/ProductDetailPage";
import WishlistPage from "../pages/WishList/WishListPage";
import CartPage from "../pages/Cart/CartPage";
import MainLayout from "../components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <AllProductsPage />,
      },
      {
        path: "product-details",
        element: <ProductDetailPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
