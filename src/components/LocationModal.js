import React, { useState } from 'react';
import './LocationModal.css';

const LocationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Location');

  const cities = [
    'Mumbai',
    'Delhi-NCR',
    'Bengaluru',
    'Hyderabad',
    'Chandigarh',
    'Ahmedabad',
    'Chennai',
    'Pune',
    'Kolkata',
    'Kochi'
  ];

  const handleCityClick = (city) => {
    setSelectedCity(city);       
    setIsOpen(false);            
  };

  return (
    <div className="location-container">
      <span className="location-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedCity} &#9662;
      </span>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="location-modal" onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Search for your city"
              className="search-input"
            />

            <div className="detect-location">Detect my location</div>

            <div className="popular-title">Popular Cities</div>
            <div className="city-list">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="city-icon"
                  onClick={() => handleCityClick(city)}
                >
                  {city}
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
