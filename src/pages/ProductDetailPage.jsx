import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { FaBolt, FaShoppingCart } from "react-icons/fa";
import Stars from "../components/common/Stars";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import Breadcrumbs from "../components/common/Breadcrumbs";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { product } = useContext(DataContext);
  const { addToCart, loading } = useContext(CartContext);

  if (!product || !product.categories) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  const selectedProduct = product.categories
    .flatMap((cat) => cat.products) // merge all product arrays
    .find((item) => item.id == id); // find product by id

  console.log(selectedProduct);
  const handleCart = () => {
    if (selectedProduct.stock === 0) {
      toast.error("Out Of Stock");
    } else {
      addToCart(selectedProduct);
    }
  };

  return (
    
    <div className="container mx-auto px-4 py-4 bg-white/70 min-h-screen flex md:flex-row flex-col gap-10">
      <div className="mt-5 h-[550px] relative">
        <img
          src={`/${selectedProduct.image}`}
          alt="product image"
          className="w-lg border border-gray-200"
        />

        {selectedProduct.stock < 1 ? (
          <p className="text-xl text-red-500 font-bold text-center">* Out of Stock</p>
        ) : (
          <div className="text-white text-base font-semibold flex gap-2 absolute bottom-0 left-0 w-full">
            <button
              onClick={() => handleCart(selectedProduct)}
              className="bg-[#ff9f00] flex-1 flex items-center justify-center gap-2 p-4"
            >
              <FaShoppingCart />{" "}
              {loading ? <p>Adding To Cart...</p> : <p>ADD TO CART</p>}
            </button>
            <button className="bg-[#fb641b] flex-1 flex items-center justify-center gap-2 p-4">
              <FaBolt /> BUY NOW
            </button>
          </div>
        )}
      </div>

      <div className="mt-10 space-y-2">
        <Breadcrumbs items={[{ label: selectedProduct.name }]}/>
        <p>{selectedProduct.brand}</p>
        <p className="text-2xl">{selectedProduct.name}</p>
        <div className="flex items-center gap-2">
          <span className="bg-green-700 text-white text-xs font-semibold p-1 rounded px-3">
            {selectedProduct.rating} <span>★</span>
          </span>
          <Stars rating={selectedProduct.rating} />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-2xl font-semibold">{selectedProduct.salePrice}</p>
          <p className="line-through text-lg text-gray-500">
            {selectedProduct.price}
          </p>
          <p className="text-lg text-green-700 font-semibold">
            {selectedProduct.discount}% Off
          </p>
        </div>
        <div>
          <span className="font-bold">Available offers</span>

          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Bank Offer — 5% cashback on Axis Bank Flipkart Debit Card up to
              ₹750 <span className="text-blue-600 cursor-pointer">T&C</span>
            </li>

            <li>
              Bank Offer — 5% cashback on Flipkart SBI Credit Card up to ₹4,000
              per calendar quarter{" "}
              <span className="text-blue-600 cursor-pointer">T&C</span>
            </li>

            <li>
              Bank Offer — 5% cashback on Flipkart Axis Bank Credit Card up to
              ₹4,000 per statement quarter{" "}
              <span className="text-blue-600 cursor-pointer">T&C</span>
            </li>

            <li>
              Special Price — Get extra ₹7901 off{" "}
              <span className="text-blue-600 cursor-pointer">T&C</span>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold">Description</h1>
          <p>{selectedProduct.description}</p>
        </div>
        <div className="md:w-xl mt-5">
          <h1 className="text-2xl font-bold">Specification</h1>
          {Object.entries(selectedProduct.specs).map(([key, value]) => (
            <div key={key} className="flex gap-5 space-y-5">
              <span className="flex-1">{key}</span>
              <span className="flex-1">:</span>
              <span className="flex-1">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
