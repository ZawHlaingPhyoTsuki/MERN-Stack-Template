import React from "react";
import ProductCard from "./ProductCard";
import SkeProductCard from "./SkeProductCard";
import useStore from "../../stores/useStore";

const ProductLists = () => {

  const { filteredProducts, loading } = useStore();

  return (
    <div className="md:col-span-3 lg:col-span-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <SkeProductCard key={index} />
          ))
        ) : filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No Products</p>
        )}
      </div>
    </div>
  );
};

export default ProductLists;
