import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (plant) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === plant.id);
      if (exists) {
        return prev.map(item =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...plant, quantity: 1 }];
    });
  };

  const removeFromCart = (plantId) => {
    setCartItems(prev => prev.filter(item => item.id !== plantId));
  };

  const increaseQuantity = (plantId) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === plantId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (plantId) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === plantId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalItems,
        getTotalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
