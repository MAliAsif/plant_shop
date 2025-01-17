
// components/ProductList.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 29.99,
    category: 'Low Maintenance',
    image: '/images/snake-plant.jpg'
  },
  {
    id: 2,
    name: 'Monstera',
    price: 49.99,
    category: 'Tropical',
    image: '/images/monstera.jpg'
  },
  {
    id: 3,
    name: 'Peace Lily',
    price: 34.99,
    category: 'Air Purifying',
    image: '/images/peace-lily.jpg'
  },
  {
    id: 4,
    name: 'Pothos',
    price: 24.99,
    category: 'Low Maintenance',
    image: '/images/pothos.jpg'
  },
  {
    id: 5,
    name: 'Bird of Paradise',
    price: 79.99,
    category: 'Tropical',
    image: '/images/bird-of-paradise.jpg'
  },
  {
    id: 6,
    name: 'Spider Plant',
    price: 19.99,
    category: 'Air Purifying',
    image: '/images/spider-plant.jpg'
  }
];

const ProductList = () => {
  const { cartItems, addToCart } = useCart();
  const categories = [...new Set(plants.map(plant => plant.category))];

  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="product-list">
      {categories.map(category => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="products-grid">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div key={plant.id} className="product-card">
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => addToCart(plant)}
                    disabled={isInCart(plant.id)}
                    className={isInCart(plant.id) ? 'btn-disabled' : 'btn'}
                  >
                    {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
