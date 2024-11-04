import React, { useContext } from 'react'
import Tag from '../Tag';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../Product/ProductCard';
import { StoreContext } from '../../context/StoreContext';

const Product = () => {
  const navigate = useNavigate();

  const { products } = useContext(StoreContext);
  return (
    <div className=" my-10 flex flex-col justify-between">
      <Tag>Our Products</Tag>
      <h1 className="text-3xl my-4 text-black font-semibold">
        Explore Our Products
      </h1>
      <div className="bg-red-100 w-full flex-grow mt-3  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No Products</p>
        )}
      </div>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/products");
        }}
        className="mx-auto mt-10 bg-red-400 px-8 py-4 rounded-md text-white"
      >
        View All Products
      </button>
    </div>
  );
}

export default Product
