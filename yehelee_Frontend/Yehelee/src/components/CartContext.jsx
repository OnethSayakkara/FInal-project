import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart((prevCart) => {
    const existingProduct = prevCart.find((item) => item.id === Number(product.id));
    if (existingProduct) {
      return prevCart.map((item) =>
        item.id === Number(product.id) ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...prevCart, { ...product, quantity: 1 }];
  });
};

const updateQuantity = (productId, quantity) => {
  setCart((prevCart) => {
    const productIndex = prevCart.findIndex((item) => item.id === productId);
    if (productIndex !== -1) {
      prevCart[productIndex].quantity = Number(quantity);
    }
    return [...prevCart];
  });
};

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, getTotalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
