import React from "react";
import CartRow from "./CartRow";

const CartHeader = () => {
  return (
    <div className="border shadow-sm my-4 py-[24px] px-[40px] rounded-[4px] grid grid-cols-4 gap-10">
      <div className="w-[200px]">Product</div>
      <div className="place-self-center">Price</div>
      <div className=" ml-10  place-self-center">Quantity</div>
      <div className="place-self-end">Subtotal</div>
    </div>
  );
};

const CartList = () => {
  return (
    <>
      <CartHeader />
      <div className="mt-8">
        <CartRow />
        <CartRow />
        <CartRow />
      </div>
    </>
  );
};

export default CartList;