import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {  RouterProvider } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";
import router from "./routes/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <StoreContextProvider>
        <RouterProvider router={router} />
      </StoreContextProvider>
  </StrictMode>
);
