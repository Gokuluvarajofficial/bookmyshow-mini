// src/components/SignInModal.js
import React, { useState } from 'react';
import './SignInModal.css';
import { useAuth } from '../context/AuthContext'; 

function SignInModal({ onClose }) {
  const { signIn } = useAuth(); // from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const res = signIn(email, password);
    if (res.ok) {
      onClose();
    } else {
      setError(res.message || 'Invalid email or password');
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
