import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/product/ProductCard";
import Search from "../components/common/Search";
import { DataContext } from "../context/DataContext";
import Breadcrumbs from "../components/common/Breadcrumbs";

const HomePage = () => {
  const { product } = useContext(DataContext);

  const [searchItem, setSearchItem] = useState("");
  if (!product) {
    return (
      <p className="text-center p-10 text-gray-600">Loading products...</p>
    );
  }

  const filteredCategories = product
    ? product.categories.map((category) => ({
        ...category,
        products: category.products.filter((item) =>
          item.name.toLowerCase().includes(searchItem.toLowerCase())
        ),
      }))
    : [];

  const totalFilteredProducts = filteredCategories.reduce(
    (count, cat) => count + cat.products.length,
    0
  );

  return (
    <div className="bg-gray-100">
      <Search onSearch={setSearchItem} />
      <div className="container mx-auto px-4">
        {totalFilteredProducts === 0 && (
          <p className="text-center text-xl text-gray-600 py-10">
            No products found
          </p>
        )}
        {filteredCategories.map(
          (cat) =>
            cat.products.length > 0 && (
              <div key={cat.id} className="p-5">
                <h2 className="text-2xl font-bold">{cat.name}</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 mt-5">
                  {cat.products.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default HomePage;
