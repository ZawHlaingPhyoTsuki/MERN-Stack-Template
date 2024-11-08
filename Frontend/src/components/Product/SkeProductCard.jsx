import React from "react";
import {FaRegHeart, FaStar } from "react-icons/fa";

const SkeProductCard = () => {
  
  return (
    <div className="flex flex-col gap-4 justify-between rounded-md shadow-md py-4 px-4 relative">
      <div className="absolute top-2 right-2 text-2xl text-gray-300 bg-gray-300 rounded-full p-2 scale-75">
        <FaRegHeart />
      </div>
      {/* Product Image */}
      <div className="w-[200px] m-auto">
        <img className="object-contain" src="" alt="" />
      </div>
      <div className="flex flex-col justify-between">
        {/* Product Title */}
        <div>
          <h5 className="line-clamp-2 h-[55px] text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          </h5>
        </div>
        {/* Rating Stars */}
        <div className="mb-5 mt-2.5 flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className={`text-gray-300 h-5 w-5`} />
          ))}
          <span className="ml-3 mr-2 rounded bg-gray-300 px-2.5 py-0.5 text-xs font-semibold text-gray-300">
            a
          </span>
        </div>
        {/* Price and Add to Cart Button */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
          </span>
          <div
            className={`rounded-lg 
              "bg-red-800"-500"
             px-5 py-2.5 text-center text-sm font-medium text-white`}
          >
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeProductCard;
