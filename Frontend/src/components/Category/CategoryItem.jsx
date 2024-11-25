import React from "react";
import { FaComputer } from "react-icons/fa6";
import { GiBigDiamondRing } from "react-icons/gi";
import { GrRestroomMen, GrRestroomWomen } from "react-icons/gr";

const CategoryItem = ({ children, category }) => {
  // Categories icon
  const categoriesIcon = [
    { name: "electronics", icon: <FaComputer /> },
    { name: "jewelery", icon: <GiBigDiamondRing /> },
    { name: "men's clothing", icon: <GrRestroomMen /> },
    { name: "women's clothing", icon: <GrRestroomWomen /> },
  ];

  // Find the matching icon
  const matchedIcon = categoriesIcon.find(
    (item) => item.name.toLowerCase() === children.toLowerCase()
  )?.icon;

  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  return (
    <div className="w-[170px] h-[145px] border rounded-lg flex-shrink-0 flex flex-col items-center justify-center gap-4">
      {matchedIcon ? (
        <div className="text-3xl">{matchedIcon}</div>
      ) : (
        <span>Icon not found</span>
      )}
      <span>{capitalizeFirstLetter(children)}</span>
    </div>
  );
};

export default CategoryItem;
