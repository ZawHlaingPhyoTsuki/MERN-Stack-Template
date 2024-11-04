import React from "react";
import NaviBtn from "../NaviBtn";

const Receipt = () => {
  return (
    <div className="border-2 border-slate-800 mt-14 w-[400px] h-[400px] rounded-md flex flex-col justify-around px-5">
      <div>
        <h2 className="text-xl font-semibold">Cart Total</h2>
      </div>
      <div>
        <div className="my-3 flex justify-between">
          <div>SubTotal:</div>
          <div>$1750</div>
        </div>
        <hr className=" border-t-2 border-gray-400" />
        <div className="my-3 flex justify-between">
          <div>Shipping:</div>
          <div>Free</div>
        </div>
        <hr className=" border-t-2 border-gray-400" />
        <div className="my-3 flex justify-between">
          <div>Total:</div>
          <div>$1750</div>
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
