import React from "react";
import "./PremieresSection.css";

const premieresData = [
  {
    image: "/assets/premiere1.jpg",
    title: "Night Silence",
    language: "Polish",
  },
  {
    image: "/assets/premiere2.jpg",
    title: "28 Years Later",
    language: "English",
  },
  {
    image: "/assets/premiere3.jpg",
    title: "The Phoenician Scheme",
    language: "English, Hindi",
  },
  {
    image: "/assets/premiere4.jpg",
    title: "Materialists",
    language: "English",
  },
  {
    image: "/assets/premiere5.jpg",
    title: "Haunted Heart",
    language: "Spanish",
  },
];

const PremieresSection = () => {
  return (
    <div className="premiere-section">
      <div className="premiere-title-block">
        <h2>Premieres</h2>
        <p>Brand new releases every Friday</p>
      </div>

      <div className="premiere-movie-list">
        {premieresData.map((movie, index) => (
          <div key={index} className="premiere-card">
            <img src={movie.image} alt={movie.title} />
            <h4>{movie.title}</h4>
            <p>{movie.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremieresSection;
