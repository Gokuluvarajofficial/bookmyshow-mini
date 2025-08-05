import React, { useState } from 'react';
import './RecommendedMovies.css';

const movieData = [
  {
    image: '/assets/fantastic4.jpg',
    name: 'The Fantastic Four: First Steps',
    genre: 'Action/Adventure/Sci-Fi',
  },
  {
    image: '/assets/sonofsardaar2.jpg',
    name: 'Son of Sardaar 2',
    genre: 'Comedy/Family/Romantic',
  },
  {
    image: '/assets/saiyaara.jpg',
    name: 'Saiyaara',
    genre: 'Drama/Musical/Romantic',
  },
  {
    image: '/assets/mrzookeeper.jpg',
    name: 'Mr. Zoo Keeper',
    genre: 'Adventure/Drama',
  },
  {
    image: '/assets/narasimha.jpg',
    name: 'Mahavatar Narsimha',
    genre: 'Action/Animation/Drama',
  },
  {
    image: '/assets/kingdom.jpg',
    name: 'Kingdom',
    genre: 'Action/Drama',
  },
  {
    image: '/assets/maareesan.jpg',
    name: 'Maareesan',
    genre: 'Adventure/Drama/Thriller',
  },
  {
    image: '/assets/housemates.jpg',
    name: 'Housemates',
    genre: 'Comedy/Fantasy/Horror',
  },
  {
    image: '/assets/thalaivan-thalaivi.jpg',
    name: 'Thalaivan Thalaivii',
    genre: 'Comedy/Drama/Romantic',
  },
  {
    image: '/assets/acqust.jpg',
    name: 'Accused',
    genre: 'Crime/Drama/Thriller',
  },
];

function RecommendedMovies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleMovies = movieData.slice(currentIndex, currentIndex + 5);

  const handleNext = () => {
    if (currentIndex + 5 < movieData.length) {
      setCurrentIndex(currentIndex + 5);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 5 >= 0) {
      setCurrentIndex(currentIndex - 5);
    }
  };

  return (
    <div className="recommended-container">
      <h2>Recommended Movies</h2>
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button className="arrow left" onClick={handlePrev}>
            &#8249;
          </button>
        )}
        <div className="movie-list">
          {visibleMovies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.image} alt={movie.name} />
              <div className="movie-info">
                <h3>{movie.name}</h3>
                <p>{movie.genre}</p>
              </div>
            </div>
          ))}
        </div>
        {currentIndex + 5 < movieData.length && (
          <button className="arrow right" onClick={handleNext}>
            &#8250;
          </button>
        )}
      </div>
    </div>
  );
}

export default RecommendedMovies;
