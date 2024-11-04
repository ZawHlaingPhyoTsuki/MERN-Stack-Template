import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const AdBar = () => {
  return (
    <div className="bg-black">
      <div className="w-[80%] mx-auto flex items-center justify-between text-[#d9d9d9] text-xs p-2 ">
        <div></div>
        <div className="lg:-mr-24">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link to={"/products"}  className="font-semibold underline px-2 cursor-pointer"> ShopNow</Link>
        </div>
        <div className=" flex items-center gap-2 ">
          <p>English</p>
          <span>
            <IoIosArrowDown className="text-sm" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdBar;
