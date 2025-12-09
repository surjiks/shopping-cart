import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartCard from "../components/cart/CartCard";
import EmptyCard from "../assets/emptycart.webp";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const navigate = useNavigate();
  const { cart ,clearCart} = useContext(CartContext);
  console.log(cart);

  const totalOriginalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const totalSalePrice = cart.reduce(
    (acc, item) => acc + item.salePrice * item.qty,
    0
  );

  const totalDiscount = totalOriginalPrice - totalSalePrice;

  const protectFee = cart.length > 0 ? 149 : 0;

  const grandTotal = totalSalePrice + protectFee;

  const handlePlaceOrder = () => {
    Swal.fire({
      title: "Order Placed!",
      text: "Your order has been successfully placed.",
      icon: "success",
      confirmButtonColor: "#fb641b",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        navigate("/");
      }
    });
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto bg-white flex flex-col justify-center items-center p-10 gap-3">
        <img src={EmptyCard} alt="" className="h-50" />
        <p className="text-2xl">Your Cart Is Empty</p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#fb641b] text-white p-3 px-10 text-base font-bold"
        >
          BROWSE
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 flex gap-5 ">
      <div className="w-4xl bg-white">
        {cart.map((item, key) => (
          <div key={key} className="">
            <CartCard items={item} />
          </div>
        ))}
        <div className="p-5 flex justify-end shadow-top">
          <button
            onClick={handlePlaceOrder}
            className="bg-[#fb641b] text-white p-3 px-10 text-base font-bold"
          >
            PLACE ORDER
          </button>
        </div>
      </div>

      <div className="bg-white w-md fixed right-[340px]">
        <h1 className="text-gray-500 p-4 font-semibold border-b border-gray-300">
          PRICE DETAILS
        </h1>
        <div className="p-3 px-6 space-y-5 border-b border-gray-300">
          <p className="flex justify-between text-lg">
            <span>Price ({cart.length} items)</span>
            <span>₹{totalOriginalPrice.toLocaleString()}</span>
          </p>
          <p className="flex justify-between text-lg">
            <span>Discount</span>
            <span className="text-green-500">
              − ₹{totalDiscount.toLocaleString()}
            </span>
          </p>
          <p className="flex justify-between text-lg">
            <span>Protect Promise Fee</span>
            <span>₹{protectFee}</span>
          </p>
        </div>
        <p className="p-4 flex justify-between text-xl mb-2">
          <span className="font-bold">Total Amount</span>
          <span>₹{grandTotal.toLocaleString()}</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
