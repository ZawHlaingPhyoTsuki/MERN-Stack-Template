import React from "react";
import Breadcrumb from "../../components/Body/Breadcrumb";
import ProductLists from "../../components/Product/ProductLists";
import FilterSidebar from "../../components/Product/FilterSidebar";
import Filterbar from "../../components/Product/Filterbar";

const AllProductsPage = () => {
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
