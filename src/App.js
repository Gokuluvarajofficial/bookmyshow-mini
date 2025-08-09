// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import PromoBanner from './components/PromoBanner';
import RecommendedMovies from './components/RecommendedMovies';
import PromoBanner2 from './components/PromoBanner2';
import BestOfLiveEvents from './components/BestOfLiveEvents';
import PremieresSection from './components/PremieresSection';
import TheatreSelectionPage from './pages/TheatreSelectionPage';
import SeatSelectionPage from './pages/SeatSelectionPage';
import Footer from './components/Footer';

import { AuthProvider } from './context/AuthContext'; 

function HomePage() {
  return (
    <>
      <Header />
      <PromoBanner />
      <RecommendedMovies />
      <PromoBanner2 />
      <BestOfLiveEvents />
      <PremieresSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/select-theatre/:movieId" element={<TheatreSelectionPage />} />
          <Route path="/select-seats/:movieId/:theatreId" element={<SeatSelectionPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
