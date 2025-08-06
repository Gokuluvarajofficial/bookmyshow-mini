// src/components/RecommendedMovies.js
import React, { useState } from 'react';
import './RecommendedMovies.css';
import { useNavigate } from 'react-router-dom';

const movieData = [
  {
    id: 'movie1',
    image: '/assets/fantastic4.jpg',
    name: 'The Fantastic Four: First Steps',
    genre: 'Action/Adventure/Sci-Fi',
  },
  {
    id: 'movie2',
    image: '/assets/sonofsardaar2.jpg',
    name: 'Son of Sardaar 2',
    genre: 'Comedy/Family/Romantic',
  },
  {
    id: 'movie3',
    image: '/assets/saiyaara.jpg',
    name: 'Saiyaara',
    genre: 'Drama/Musical/Romantic',
  },
  {
    id: 'movie4',
    image: '/assets/mrzookeeper.jpg',
    name: 'Mr. Zoo Keeper',
    genre: 'Adventure/Drama',
  },
  {
    id: 'movie5',
    image: '/assets/narasimha.jpg',
    name: 'Mahavatar Narsimha',
    genre: 'Action/Animation/Drama',
  },
  {
    id: 'movie6',
    image: '/assets/kingdom.jpg',
    name: 'Kingdom',
    genre: 'Action/Drama',
  },
  {
    id: 'movie7',
    image: '/assets/maareesan.jpg',
    name: 'Maareesan',
    genre: 'Adventure/Drama/Thriller',
  },
  {
    id: 'movie8',
    image: '/assets/housemates.jpg',
    name: 'Housemates',
    genre: 'Comedy/Fantasy/Horror',
  },
  {
    id: 'movie9',
    image: '/assets/thalaivan-thalaivi.jpg',
    name: 'Thalaivan Thalaivii',
    genre: 'Comedy/Drama/Romantic',
  },
  {
    id: 'movie10',
    image: '/assets/acqust.jpg',
    name: 'Accused',
    genre: 'Crime/Drama/Thriller',
  },
];

function RecommendedMovies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

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

  const handleBook = (movieId) => {
    navigate(`/select-theatre/${movieId}`);
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
                <button
                  className="signin-btn"
                  onClick={() => handleBook(movie.id)}
                >
                  Book Tickets
                </button>
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
