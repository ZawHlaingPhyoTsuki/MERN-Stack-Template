import React from "react";

const Filterbar = () => {
  return (
    <div className="bg-red-300 flex justify-between items-center px-8 py-3">
      <div className="">aaaa</div>
      <div className="flex justify-between items-center gap-8">
        <div>bbb</div>
        <div>
          <select name="" id="" className="rounded-sm px-3 py-2">
            <option value="">Most Popular</option>
            <option value="">Most Recent</option>
            <option value="">Price (low to high)</option>
            <option value="">Price (high to low)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filterbar;
