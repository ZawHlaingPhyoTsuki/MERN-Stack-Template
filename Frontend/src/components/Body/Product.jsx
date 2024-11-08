import React, { useEffect, useState } from "react";
import Tag from "../Tag";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import SkeProductCard from "../Product/SkeProductCard";
import useStore from "../../stores/useStore";

const Product = () => {
  const navigate = useNavigate();

  const { products, loading } = useStore();
  const [itemsToShow, setItemsToShow] = useState(8);

  useEffect(() => {
    const UpdateItemsToShow = () => {
      if (window.innerWidth >= 1024) setItemsToShow(8);
      else if (window.innerWidth >= 768) setItemsToShow(6);
      else setItemsToShow(4);
    };
    window.addEventListener("resize", UpdateItemsToShow);
    return () => {
      window.removeEventListener("resize", UpdateItemsToShow);
    };
  },[])

  return (
    <div className=" my-10 flex flex-col justify-between">
      <Tag>Our Products</Tag>
      <h1 className="text-3xl my-4 text-black font-semibold">
        Explore Our Products
      </h1>
      <div className=" w-full flex-grow mt-3  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading ? (
          Array.from({ length: itemsToShow }).map((_, index) => (
            <SkeProductCard key={index} />
          ))
        ) : products && products.length > 0 ? (
          products
            .slice(0, itemsToShow)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <p>No Products</p>
        )}
      </div>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/products");
        }}
        className="mx-auto mt-10 bg-red-500 hover:bg-red-800 focus:outline-none px-8 py-4 rounded-md text-white"
      >
        View All Products
      </button>
    </div>
  );
};

export default Product;
