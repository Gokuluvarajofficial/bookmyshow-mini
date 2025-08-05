import React from 'react';
import './BestOfLiveEvents.css';

const images = [
  'comedy.jpg',
  'amusement.jpg',
  'kids.jpg',
  'music.jpg',
  'workshops.jpg',
];

const BestOfLiveEvents = () => {
  return (
    <div className="best-events-container">
      <h2 className="best-events-title">The Best Of Live Events</h2>
      <div className="best-events-grid">
        {images.map((img, index) => (
          <div className="event-card" key={index}>
            <img
              src={`/assets/${img}`}
              alt={`event-${index}`}
              className="event-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestOfLiveEvents;
