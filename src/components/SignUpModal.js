// src/components/SignUpModal.js
import React, { useState } from 'react';
import './SignInModal.css';
import { useAuth } from '../context/AuthContext'; 

function SignUpModal({ onClose }) {
  const { signUp } = useAuth(); // from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    if (!email || !password || !confirm) {
      setMessage('All fields are required');
      return;
    }
    if (password !== confirm) {
      setMessage('Passwords do not match');
      return;
    }

    const res = signUp(email, password);
    setMessage(res.message);

    if (res.ok) {
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  return (
    <div className="signin-modal-overlay">
      <div className="signin-modal">
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        {message && <p className="error">{message}</p>}
        <button onClick={handleRegister}>Register</button>
        <button className="close-btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default SignUpModal;
