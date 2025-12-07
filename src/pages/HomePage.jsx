import React, { useEffect, useState } from "react";
import ProductCard from "../components/product/ProductCard";

const HomePage = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("/data/product.json");
      const data = await res.json();
      setProduct(data);
      console.log(data);
    };
    fetchProduct();
  }, []);
  return (
    <div className=" w-[80%] m-auto">
      {product?.categories?.map((cat) => (
        <div key={cat.id} className="p-5">
          <h2 className="text-2xl font-bold">{cat.name}</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 mt-5">
            {cat.products?.map((item) => (
              <ProductCard item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}; 

export default HomePage;
