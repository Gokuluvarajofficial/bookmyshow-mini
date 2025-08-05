import React from 'react';
import './PromoBanner2.css';

function PromoBanner2() {
  return (
    <div className="promo-banner2-container">
      <img
        src={process.env.PUBLIC_URL + '/assets/banner3.jpg'}
        alt="Promo Banner 2"
        className="promo-banner2-image"
      />
    </div>
  );
}

export default PromoBanner2;
