import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const CartCard = ({ items }) => {
  const { removeFromCart, decreaseQty, increaseQty } = useContext(CartContext);

  const handleDelete = (id) => {
    removeFromCart(id);
  };
  return (
    <div className="flex items-center border-b border-gray-300 p-3">
      <img src={items.image} alt="" className="w-44 h-40 object-cover p-3" />
      <div className="px-6 space-y-3 flex-1">
        <p className=" text-lg">{items.name}</p>

        <div className="flex items-center gap-1">
          <p className="line-through text-[14px] text-gray-500">
            {items.price}
          </p>
          <p className="text-xl font-bold">{items.salePrice}</p>
          <p className="text-[13px] text-green-700 font-semibold">
            {" "}
            {items.discount}% Off{" "}
          </p>
        </div>

        <p>+ ₹149 Protect Promise Fee</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 px-3 py-2">
          <button
            disabled={items.qty <= 1}
            className="bg-gray-200 hover:bg-gray-300 text-xl font-bold w-8 h-8 flex items-center justify-center rounded"
            onClick={() => decreaseQty(items.id)}
          >
            -
          </button>
          <span className="text-lg font-semibold w-6 text-center">
            {items.qty}
          </span>

          <button
            disabled={items.stock === items.qty}
            className="bg-gray-200 hover:bg-gray-300 text-xl font-bold w-8 h-8 flex items-center justify-center rounded"
            onClick={() => increaseQty(items.id)}
          >
            +
          </button>
        </div>
        {items.stock === items.qty && (
          <p className="text-red-500 text-xs mt-1">Not enough stock</p>
        )}
        <button
          onClick={() => handleDelete(items.id)}
          type="button"
          className="text-blue-500 underline"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default CartCard;
