import React from "react";
import NaviBtn from "../NaviBtn";
import useStore from "../../stores/useStore";

const Receipt = () => {
  const { cart, quantities } = useStore();
  const subTotal = cart.reduce(
    (total, item) => total + item.price * quantities[item.id],
    0
  );
  const shipping = 0;
  const total = subTotal + shipping;

  return (
    <div className="border-2 border-slate-800 mt-14 w-[400px] h-[400px] rounded-md flex flex-col justify-around px-5">
      <div>
        <h2 className="text-xl font-semibold">Cart Total</h2>
      </div>
      <div>
        <div className="my-3 flex justify-between">
          <div>SubTotal:</div>
          <div>$ {subTotal.toFixed(2)}</div>
        </div>
        <hr className=" border-t-2 border-gray-400" />
        <div className="my-3 flex justify-between">
          <div>Shipping:</div>
          <div>Free</div>
        </div>
        <hr className=" border-t-2 border-gray-400" />
        <div className="my-3 flex justify-between">
          <div>Total:</div>
          <div>$ {total.toFixed(2)}</div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <NaviBtn className={"bg-red-500 text-white"}>
          Procees to Checkout
        </NaviBtn>
      </div>
    </div>
  );
};

export default Receipt;
