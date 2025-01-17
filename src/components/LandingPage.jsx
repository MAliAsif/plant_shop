
// components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Green Haven</h1>
        <p>
          Welcome to Green Haven, your premier destination for beautiful, 
          sustainable houseplants. We carefully select and nurture each plant 
          to bring life and vibrancy to your home.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

// components/Header.jsx
