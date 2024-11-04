import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const ProductDetail = () => {
  return (
    <div className="flex gap-3 flex-col lg:flex-row">
      {/* left */}
      <section className="flex gap-3 ">
        {/* img lists */}
        <div className="flex flex-col gap-4 basis-1/4">
          <div className="bg-red-50 h-28">11</div>
          <div className="bg-red-50 h-28">11</div>
          <div className="bg-red-50 h-28">11</div>
        </div>
        {/* img */}
        <div className="w-full h-auto basis-3/4">
          <img src="../../../public/image.png" alt="" />
        </div>
      </section>
      {/* right */}
      <section className="bg-purple-50 flex flex-col gap-2 p-4 max-w-[600px]">
        <header>
          <h2 className="text-3xl font-serif font-semibold">Lite Belt Bag</h2>
          <span className="font-semibold">$ 48</span>
          <hr className="border-t-1 border-gray-400 my-2" />
          <p className="text-gray-600 text-justify text-sm">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse totam
            molestiae natus vero commodi.
          </p>
        </header>
        <div className="">
          <h3>Select Color: Ash (Leater free)</h3>
          <div className="flex gap-2 py-4 ">
            <div className="border border-gray-700">
              <img src="../../../public/image copy.png" alt="" />
            </div>
            <div className="border border-gray-700">
              <img src="../../../public/image copy.png" alt="" />
            </div>
            <div className="border border-gray-700">
              <img src="../../../public/image copy.png" alt="" />
            </div>
            <div className="border border-gray-700">
              <img src="../../../public/image copy.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h3>Features</h3>
          <ul className="list-disc pl-6 text-sm mt-2 leading-6 text-gray-600">
            <li>Durable ripstop is 3x lighter than our other fabrics</li>
            <li>Durable ripstop is 3x lighter than our other fabrics</li>
            <li>Durable ripstop is 3x lighter than our other fabrics</li>
          </ul>
        </div>
        <div className="flex gap-2 mt-3 justify-between flex-wrap md:flex-nowrap">
          {/* QUANTITY button */}
          <div className="border rounded-md border-gray-700 flex items-center h-[44px]">
            <button className="flex items-center justify-center rounded-l-md border border-r-black px-2 py-1 h-full">
              <FaMinus className="text-sm" />
            </button>
            <div className="px-2 text-center w-[60px]">{1}</div>
            <button className="flex items-center justify-center bg-red-500 rounded-r-md border border-red-500 text-[#d9d9d9] px-2 py-1 h-full">
              <FaPlus className="text-sm" />
            </button>
          </div>
          <div className="flex gap-2 items-center max-[470px]:mt-3">
            {/* BUY NOW button */}
            <button className="bg-red-500 text-[#d9d9d9] px-4 py-2  rounded-md w-[165px] h-[44px]">
              Buy Now
            </button>
            {/* HEART button */}
            <button className="flex items-center justify-center rounded-md w-[40px] h-[40px] border border-gray-700">
              <CiHeart className="text-xl" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
