import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [products, setProducts] = useState([]);
  const url = "http://localhost:4000";

  // fetching data

  const fetchProducts = async () => {
    const response = await axios.get(`${url}/api/product/get`);
    console.log(response?.data?.data);
    setProducts(response?.data?.data || []);
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchProducts();
    };
    loadData();
  }, []);

  const contextValue = {
    showMenu,
    setShowMenu,
    fetchProducts,
    products,
    setProducts,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
