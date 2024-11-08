import React from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import useStore from "../../stores/useStore";

const ProductCard = ({ product }) => {
  if (!product) {
    return null; // Don't render anything if product is undefined
  }

  // Generate star rating based on product.rating.rate
  const renderStars = (rate) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`${
            i < rate ? "text-yellow-300" : "text-gray-300"
          } h-5 w-5`}
        />
      );
    }
    return stars;
  };
  const { wishlist, toggleWishlist, cart, toggleCart, resetQuantity } =
    useStore();

  const isFavorite = wishlist.some((item) => item.id === product.id);

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      to={`/products/${product.id}`}
      className="flex flex-col gap-4 justify-between rounded-md shadow-md py-4 px-4 relative"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product);
        }}
        className="absolute top-2 right-2 text-2xl text-red-500 bg-white rounded-full p-2 scale-75"
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>
      {/* Product Image */}
      <div className="w-[200px] m-auto">
        <img
          className="object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="flex flex-col justify-between">
        {/* Product Title */}
        <div>
          <h5 className="line-clamp-2 h-[55px] text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </div>
        {/* Rating Stars */}
        <div className="mb-5 mt-2.5 flex items-center">
          {renderStars(Math.round(product.rating.rate))}
          <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            {product.rating.rate}
          </span>
        </div>
        {/* Price and Add to Cart Button */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            $ {product.price}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleCart(product);
              resetQuantity(product?.id);
            }}
            className={`rounded-lg ${
              isInCart ? "bg-red-800" : "bg-red-500"
            } px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 `}
          >
            {isInCart ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
