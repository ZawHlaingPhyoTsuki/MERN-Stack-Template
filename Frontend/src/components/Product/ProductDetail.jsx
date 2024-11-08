import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useStore from "../../stores/useStore";

const ProductDetail = ({ product }) => {
  const {
    wishlist,
    toggleWishlist,
    cart,
    toggleCart,
    resetQuantity,
    quantities,
    incrementQuantity,
    decrementQuantity,
  } = useStore();

  // Check if the product is already in the wishlist
  const isFavorite = wishlist.some((item) => item.id === product?.id);

  // Check if the product is already in the cart
  const isInCart = cart.some((item) => item.id === product?.id);

  const handleIncrement = () => {
    incrementQuantity(product?.id);
  };

  const handleDecrement = () => {
    decrementQuantity(product?.id);
  };

  return (
    <div className="flex gap-8 flex-col lg:flex-row justify-between">
      {/* Left section (Image section) */}
      <section className="flex gap-6 justify-between w-[100%] max-w-[600px] rounded-md shadow-md px-6 pb-6">
        {/* Image List */}
        <div className="flex flex-col gap-4 basis-1/4">
          <div className="bg-red-50 h-28">11</div>
          <div className="bg-red-50 h-28">11</div>
          <div className="bg-red-50 h-28">11</div>
        </div>
        {/* Main Image */}
        <div className="w-full h-auto basis-3/4 ">
          <img
            className="h-[370px] w-full mx-auto border py-4 px-2 shadow-sm rounded-md object-contain"
            src={product?.image}
            alt={product?.title}
          />
        </div>
      </section>

      {/* Right section (Product details) */}
      <section className="rounded-md shadow-md flex flex-col gap-2 p-4 max-w-[600px] pb-8 relative">
        {/* HEART Button */}
        <button
          onClick={() => toggleWishlist(product)}
          className={`top-2 right-2 absolute flex items-center justify-center rounded-md w-[40px] h-[40px] border border-gray-700 ${
            isFavorite ? "text-red-500" : "text-gray-700"
          } `}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>

        <header>
          <h2 className="text-3xl font-serif font-semibold">
            {product?.title}
          </h2>
          <span className="font-semibold">${product?.price}</span>
          <hr className="border-t-1 border-gray-400 my-2" />
          <p className="text-gray-600 text-justify text-sm">
            {product?.description}
          </p>
        </header>

        <div>
          <h3>Select Color: Ash (Leather free)</h3>
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
          {/* QUANTITY Button */}
          <div className="border rounded-md border-gray-700 flex items-center h-[44px]">
            <button
              onClick={handleDecrement} // Pass product.id instead of entire product object
              className="flex items-center justify-center rounded-l-md border border-r-black px-2 py-1 h-full"
            >
              <FaMinus className="text-sm" />
            </button>
            <div className="px-2 text-center w-[60px]">
              {quantities[product?.id] || 1}
            </div>
            <button
              onClick={handleIncrement} // Pass product.id instead of entire product object
              className="flex items-center justify-center bg-red-500 rounded-r-md border border-red-500 text-white px-2 py-1 h-full"
            >
              <FaPlus className="text-sm" />
            </button>
          </div>

          <div className="flex gap-2 items-center max-[470px]:mt-3">
            {/* Add to Cart Button */}
            <button
              onClick={() => {
                toggleCart(product);
                resetQuantity(product?.id);
              }}
              className={`border border-red-500 px-4 py-2 rounded-md w-[165px] h-[44px] ${
                isInCart ? "bg-red-900 text-white" : "bg-[#FFF5F1]"
              }`}
            >
              {isInCart ? "Added to Cart" : "Add to Cart"}
            </button>
            {/* Buy Now Button */}
            <button className="bg-red-500 text-white px-4 py-2 rounded-md w-[165px] h-[44px]">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
