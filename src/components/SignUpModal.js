import React, { useState } from 'react';
import './SignInModal.css';

function SignUpModal({ onClose }) {
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
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[email]) {
      setMessage('User already exists. Please sign in.');
      return;
    }
    users[email] = password;
    localStorage.setItem('users', JSON.stringify(users));
    setMessage('Registered successfully! Please sign in.');

    // ✅ Auto-close after 1.5 sec
    setTimeout(() => {
      onClose();
    }, 1500);
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
