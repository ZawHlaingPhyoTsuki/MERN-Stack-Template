import React from "react";
import WishListItem from "./WishListItem";

const WishListRow = () => {
  return (
    <div className=" bg-red-100 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <WishListItem />
      <WishListItem />
      <WishListItem />
      <WishListItem />
    </div>
  );
};

export default WishListRow;
