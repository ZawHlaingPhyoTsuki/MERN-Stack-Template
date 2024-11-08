import React, { useEffect } from "react";
import Hero from "../../components/Body/Hero";
import Product from "../../components/Body/Product";
import Categories from "../../components/Category/Categories";
import useStore from "../../stores/useStore";

const HomePage = () => {

  const { fetchCategories, fetchProducts } = useStore();
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  return (
    <>
      <Hero />
      <Categories />
      <Product />
    </>
  );
};

export default HomePage;
