import React from "react";
import { FaStore } from "react-icons/fa";

const StoreCard = ({ isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`max-w-[270px] border rounded-md p-4 flex flex-col items-center gap-4 group transition duration-300 cursor-pointer mx-auto w-full ${
        isActive
          ? "bg-[#DB4444] text-white"
          : "hover:bg-[#DB4444] hover:text-white"
      }`}
    >
      <div
        className={`flex items-center justify-center w-16 h-16 rounded-full transition duration-300 ${
          isActive ? "bg-[#E67C7C]" : "bg-[#d9d9d9] group-hover:bg-[#E67C7C]"
        }`}
      >
        <FaStore
          className={`text-4xl p-[6px] rounded-full transition duration-300 ${
            isActive
              ? "bg-white text-black"
              : "text-white bg-black group-hover:bg-white group-hover:text-black"
          }`}
        />
      </div>
      <div className="flex flex-col items-center">
        <h4 className={`${isActive ? "text-white" : "group-hover:text-white"}`}>
          10.5k
        </h4>
        <p className={`${isActive ? "text-white" : "group-hover:text-white"}`}>
          Sallers active our store
        </p>
      </div>
    </div>
  );
};

export default StoreCard;
