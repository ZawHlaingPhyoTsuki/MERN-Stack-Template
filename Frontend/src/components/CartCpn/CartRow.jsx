import React from "react";

const CartRow = () => {
  return (
    <div className="border shadow-sm my-4 py-[24px] px-[40px] rounded-[4px] grid grid-cols-4 gap-10 h-[102px]">
      <div className="my-auto w-[200px]">Product</div>
      <div className="place-self-center">Price</div>
      <div className="ml-10 place-self-center">Quantity</div>
      <div className="my-auto place-self-end">Subtotal</div>
    </div>
  );
};

export default CartRow;
