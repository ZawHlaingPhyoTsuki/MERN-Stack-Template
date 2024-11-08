import React from "react";

const CategoryItem = ({ children }) => {
  return (
    <div className="w-[170px] h-[145px] bg-red-200 flex-shrink-0">
      {children}
    </div>
  );
};

export default CategoryItem;
