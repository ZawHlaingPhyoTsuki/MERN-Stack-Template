import React from "react";
import Tag from "../Tag";
import CategoryRow from "./CategoryRow";

const Categories = () => {
  return (
    <div className=" my-20 flex flex-col justify-between">
      <Tag>Categories</Tag>
      <h1 className="text-3xl my-4 text-black font-semibold">
        Browser By Category
      </h1>

      <CategoryRow />
    </div>
  );
};

export default Categories;
