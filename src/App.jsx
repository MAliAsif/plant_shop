// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/Landingpage';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import { CartProvider } from './context/CartContext';
import './styles/App.css';
//import LandingPage from './components/Landingpage';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/products" 
              element={
                <>
                  <Header />
                  <ProductList />
                </>
              } 
            />
            <Route 
              path="/cart" 
              element={
                <>
                  <Header />
                  <ShoppingCart />
                </>
              } 
            />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
