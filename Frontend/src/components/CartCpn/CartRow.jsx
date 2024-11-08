import React from "react";
import useStore from "../../stores/useStore";

const CartRow = ({ product }) => {
  const { quantities, incrementQuantity, decrementQuantity, toggleCart } = useStore();

  const Quantities = quantities[product?.id] || 1;
  const SubTotal = (product?.price * Quantities).toFixed(2);

  return (
    <div className="border shadow-sm my-4 py-[24px] px-[40px] rounded-[4px] grid grid-cols-4 gap-10 h-[102px]">
      <div className="my-auto w-[200px]">{product?.title}</div>
      <div className="place-self-center">$ {product?.price}</div>
      <div className="ml-10 place-self-center">{Quantities}</div>
      <div className="my-auto place-self-end">$ {SubTotal}</div>
    </div>
  );
};

export default CartRow;
