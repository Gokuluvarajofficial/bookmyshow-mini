// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
import LocationModal from './LocationModal';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import { useAuth } from '../context/AuthContext'; 

function Header() {
  const { userEmail, signOut } = useAuth(); //use context
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

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
          {userEmail ? (
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span className="email-badge">{userEmail}</span>
              <button className="signin-btn" onClick={signOut}>Log out</button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="signin-btn" onClick={() => setShowSignIn(true)}>Sign in</button>
              <button className="signin-btn" onClick={() => setShowSignUp(true)}>Sign up</button>
            </div>
          )}
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

      {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
    </header>
  );
}

export default Header;
