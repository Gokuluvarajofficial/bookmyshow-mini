// src/components/PromoBanner.js
import React, { useEffect, useState } from 'react';
import './PromoBanner.css';

const bannerImages = [
  process.env.PUBLIC_URL + '/assets/banner1.jpg',
  process.env.PUBLIC_URL + '/assets/banner2.jpg'
];

function PromoBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, 10000); // change every 10 seconds

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="promo-banner">
      <img src={bannerImages[current]} alt="Promotional Banner" />
      <div className="dots">
        {bannerImages.map((_, index) => (
          <span
            key={index}
            className={index === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default PromoBanner;
