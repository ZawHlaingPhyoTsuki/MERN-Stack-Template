import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  if (!product) {
    return null; // Don't render anything if product is undefined
  }
  return (
    <Link to={"/product-details"} className="bg-purple-200 h-[300px]">
      <h2>{product?.name}</h2>
      <p>${product?.name}</p>
      <p>{product?.description}</p>
    </Link>
  );
};

export default ProductCard
