import React from 'react';
import './App.css';
import Header from './components/Header';
import PromoBanner from './components/PromoBanner';
import RecommendedMovies from './components/RecommendedMovies';
import PromoBanner2 from './components/PromoBanner2';
import BestOfLiveEvents from './components/BestOfLiveEvents';
import PremieresSection from './components/PremieresSection';



function App() {
  return (
    <div className="App">
      <Header />
      <PromoBanner />
      <RecommendedMovies />
      <PromoBanner2 />
      <BestOfLiveEvents />
      <PremieresSection />
    </div>
  );
}

export default App;
