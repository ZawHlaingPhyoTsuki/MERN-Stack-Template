import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
const Breadcrumb1 = () => {
  return (
    <div className="h-[100px] flex items-center">
      <Breadcrumb className="scale-110" aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Cart</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumb1;
