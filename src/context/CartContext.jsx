import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //add to cart

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

  //remove from cart

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
  };

  //increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  //decrease quantity
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        loading,
        setLoading,
        removeFromCart,
        clearCart,
        increaseQty,
        decreaseQty
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
