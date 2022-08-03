import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/homePage'
import { FavouritesPage } from './pages/favouritesPage'
import { Navigation } from './components/Navigation'


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/fav" element={ <FavouritesPage /> } />
      </Routes>
    </>
  );
}

export default App;
