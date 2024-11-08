import React from "react";
import Breadcrumb1 from "../../components/Header/Breadcrumb1";
import { Link } from "react-router-dom";
import NaviBtn from "../../components/NaviBtn";
import Receipt from "../../components/CartCpn/Receipt";
import CartList from "../../components/CartCpn/CartList";

const CartPage = () => {
  return (
    <div>
      <Breadcrumb1 />
      <CartList />
      <div className="flex gap-4 justify-between">
        <Link to={"/products"} className="">
          <NaviBtn>Return to Shop</NaviBtn>
        </Link>
        <Link className="">
          <NaviBtn>Update Cart</NaviBtn>
        </Link>
      </div>
      <div className="flex justify-center lg:justify-end">
        <Receipt />
      </div>
    </div>
  );
};

export default CartPage;
