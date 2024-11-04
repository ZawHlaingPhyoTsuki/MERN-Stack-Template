import React from "react";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const ProductLists = () => {
  const { products } = useContext(StoreContext);

  return (
    <div className="bg-red-200 md:col-span-3 lg:col-span-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2">
        {products && products.length > 0 ? (products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))) : (<p>No Products</p>)}
        
      </div>
    </div>
  );
};

export default ProductLists;
