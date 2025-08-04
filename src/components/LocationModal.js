// components/LocationModal.js
import React, { useState } from 'react';
import './LocationModal.css';

const LocationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cities = [
    { name: 'Mumbai', icon: '🌆' },
    { name: 'Delhi-NCR', icon: '🏛️' },
    { name: 'Bengaluru', icon: '🌆' },
    { name: 'Hyderabad', icon: '🌆' },
    { name: 'Chandigarh', icon: '🌆' },
    { name: 'Ahmedabad', icon: '🌆' },
    { name: 'Chennai', icon: '🌆' },
    { name: 'Pune', icon: '🌆' },
    { name: 'Kolkata', icon: '🌆' },
    { name: 'Kochi', icon: '🏝️' }
  ];

  return (
    <div className="location-container">
      <span className="location-toggle" onClick={() => setIsOpen(!isOpen)}>
        Coimbatore &#9662;
      </span>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="location-modal" onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder="Search for your city" className="search-input" />

            <div className="detect-location">📍 Detect my location</div>

            <div className="popular-title">Popular Cities</div>
            <div className="city-list">
              {cities.map((city, index) => (
                <div key={index} className="city-icon">
                  <div>{city.icon}</div>
                  <div>{city.name}</div>
                </div>
              ))}
            </div>

            <div className="view-all">View All Cities</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationModal;