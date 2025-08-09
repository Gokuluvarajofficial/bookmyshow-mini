// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");

  // Load session on first render
  useEffect(() => {
    const isSignedIn = sessionStorage.getItem("isSignedIn");
    const savedUser = localStorage.getItem("currentUser");
    if (isSignedIn === "true" && savedUser) {
      setUserEmail(savedUser);
    }
  }, []);

  // Helpers to read/write the users “DB” in localStorage
  const readUsers = () => JSON.parse(localStorage.getItem("users") || "{}");
  const writeUsers = (usersObj) =>
    localStorage.setItem("users", JSON.stringify(usersObj));

  // Sign Up
  const signUp = (email, password) => {
    const users = readUsers();
    if (users[email]) {
      return { ok: false, message: "User already exists. Please sign in." };
    }
    users[email] = password;
    writeUsers(users);
    return { ok: true, message: "Registered successfully! Please sign in." };
  };

  // Sign In
  const signIn = (email, password) => {
    const users = readUsers();
    if (users[email] && users[email] === password) {
      sessionStorage.setItem("isSignedIn", "true");
      localStorage.setItem("currentUser", email);
      setUserEmail(email);
      return { ok: true };
    }
    return { ok: false, message: "Invalid email or password" };
  };

  // Sign Out
  const signOut = () => {
    sessionStorage.removeItem("isSignedIn");
    localStorage.removeItem("currentUser");
    setUserEmail("");
  };

  const value = {
    userEmail,
    isSignedIn: !!userEmail,
    signUp,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
