import React from "react";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";
import useStore from "../../stores/useStore";

const CategoryRow = () => {
  const { categories } = useStore();

  return (
    <div className="flex gap-[30px] overflow-x-scroll scrollbar-hide scroll-smooth">
      {categories.map((category) => (
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={`/products?category=${category}`}
          key={category}
        >
          <CategoryItem category={category}>{category}</CategoryItem>
        </Link>
      ))}
    </div>
  );
};

export default CategoryRow;
