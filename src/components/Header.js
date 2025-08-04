// components/Header.js
import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import LocationModal from './LocationModal';

function Header() {
  return (
    <header className="header">
      <div className="top-header">
        <div className="logo">
          book<span className="highlight">my</span>show
        </div>

        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
          />
        </div>

        <div className="location-signin">
          <LocationModal />
          <button className="signin-btn">Sign in</button>
        </div>
      </div>

      <div className="bottom-header">
        <div className="left-menu">
          <span>Movies</span>
          <span>Stream</span>
          <span>Events</span>
          <span>Plays</span>
          <span>Sports</span>
          <span>Activities</span>
        </div>
        <div className="right-menu">
          <span>ListYourShow</span>
          <span>Corporates</span>
          <span>Offers</span>
          <span>Gift Cards</span>
        </div>
      </div>
    </header>
  );
}

export default Header;