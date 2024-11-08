import React, { useEffect, useState } from "react";
import Breadcrumb1 from "../../components/Header/Breadcrumb1";
import ProductDetail from "../../components/Product/ProductDetail";
import { useParams } from "react-router-dom";
import useStore from "../../stores/useStore";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { products } = useStore();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find(
      (item) => item.id === Number(productId)
    );
    setProduct(selectedProduct);
  }, [productId, products]);

  return (
    <div>
      <Breadcrumb1 />
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailPage;
