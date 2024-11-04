import React from "react";

const Tag = ({ children }) => {
  return (
    <div className="text-red-500 flex">
      <span className="border-l-red-500 border-l-[12px] mr-2 rounded-sm text-2xl"></span>
      <p className="text-sm">{children}</p>
    </div>
  );
};

export default Tag;
