import React, { createContext, useState } from "react";

// Create the CartContext
const CartContext = createContext();

// Create a CartProvider component to wrap your app with the context provider
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [positions, setPositions] = useState([]);

  const handleAddToCart = (item, position) => {
    setCart([...cart, item]);
    setPositions([...positions, position]);
  };

  return (
    <CartContext.Provider value={{ cart, handleAddToCart, setCart, positions, setPositions }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
