import React from "react";

const NaviBtn = ({ children, className, padding, rounded,size }) => {
  return (
    <div
      className={`${className} border-2 ${padding || "px-[48px] py-[16px]"} ${
        rounded || "rounded-[4px]"
      } ${size || ""} font-semibold cursor-pointer `}
    >
      {children}
    </div>
  );
};

export default NaviBtn;
