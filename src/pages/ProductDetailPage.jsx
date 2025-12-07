import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { product } = useContext(DataContext);

  const selectedProduct = product.categories
    .flatMap((cat) => cat.products)    // merge all product arrays
    .find((item) => item.id == id);    // find product by id

  console.log(selectedProduct)

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{selectedProduct.name}</h1>
      <p className="mt-3 text-lg text-gray-700">{selectedProduct.description}</p>
      <p className="mt-3 text-xl font-semibold">₹ {selectedProduct.price}</p>
    </div>
  );
};

export default ProductDetailPage;
