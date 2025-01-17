
// components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="header">
      <Link to="/products" className="logo">Green Haven</Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-icon">
          🛒 <span className="cart-count">{getTotalItems()}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

// components/ProductList.jsx
