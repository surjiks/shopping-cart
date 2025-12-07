import React from "react";
import Stars from "../Stars";

const ProductCard = ({ item }) => {
  return (
    <div onClick={()=>{}} className="flex flex-col items-center justify-center">
      <img src={item.image} alt="" className="w-full h-48 " />
      <div className="p-3 space-y-1">
        <p className="text-center text-gray-700">{item.name}</p>
        <p>
          {item.description.length > 20
            ? item.description.substring(0, 20) + "..."
            : item.description}
        </p>
        <div className="flex items-center gap-2 ml-3">
          <span className="bg-green-700 text-white text-xs font-semibold p-1 rounded px-3">
            {item.rating} <span>★</span> 
          </span>  

          <Stars rating={item.rating} />
        </div>

        <div className="flex items-center justify-center gap-1">
          <p className="text-[16px]">{item.salePrice}</p>
          <p className="line-through text-[14px] text-gray-500">{item.price}</p>
          <p className="text-[13px] text-green-700 font-semibold">{item.discount}% Off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
