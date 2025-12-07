import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("/data/product.json");
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return <DataContext.Provider value={{product,setProduct}}>{children}</DataContext.Provider>;
};
