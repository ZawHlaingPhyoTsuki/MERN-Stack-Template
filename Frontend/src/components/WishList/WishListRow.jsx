import React from "react";
import ProductCard from "../Product/ProductCard";
import SkeProductCard from "../Product/SkeProductCard";
import useStore from "../../stores/useStore";

const WishListRow = () => {
  const { wishlist, loading } = useStore();

  return (
    <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <SkeProductCard key={index} />
        ))
      ) : wishlist.length > 0 ? (
        wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No Products</p>
      )}
    </div>
  );
};

export default WishListRow;
