import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setLoading(true);
    const exist = cart.find((item) => item.id === product.id);
    try {
      if (exist) {
        setCart(
          cart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          )
        );
      } else {
        setCart([...cart, { ...product, qty: 1 }]);
      }
    } catch (error) {
    } finally {
      setTimeout(
        () => (
          setLoading(false), alert("Product Added To Cart !"), navigate("/cart")
        ),
        2000
      );
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, loading, setLoading }}>
      {children}
    </CartContext.Provider>
  );
};
