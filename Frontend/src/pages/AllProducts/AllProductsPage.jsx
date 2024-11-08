import React, { useEffect } from "react";
import Breadcrumb from "../../components/Body/Breadcrumb";
import ProductLists from "../../components/Product/ProductLists";
import FilterSidebar from "../../components/Product/FilterSidebar";
import Filterbar from "../../components/Product/Filterbar";
import { useLocation } from "react-router-dom";
import useStore from "../../stores/useStore";

const AllProductsPage = () => {
  const { setCategory } = useStore();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");

    setCategory(category);
  }, [location.search, setCategory]);

  return (
    <div className="">
      <Breadcrumb />
      <Filterbar />
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 px-1">
        <FilterSidebar />
        <ProductLists />
      </div>
    </div>
  );
};

export default AllProductsPage;
