import React, { useState } from 'react';
import './SignInModal.css';

function SignInModal({ onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || {};

    if (savedUsers[email] && savedUsers[email] === password) {
      sessionStorage.setItem('isSignedIn', 'true');
      localStorage.setItem('currentUser', email);
      onLoginSuccess(email);
      onClose();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="signin-modal-overlay">
      <div className="signin-modal">
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin}>Login</button>
        <button className="close-btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default SignInModal;