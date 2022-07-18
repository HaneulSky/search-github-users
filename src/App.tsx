import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import FavouritesPages from "./pages/FavouritesPages";
import Navigation from "./components/Navigation";

function App() {
  return (
      <>
          <Navigation></Navigation>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/favourites" element={ <FavouritesPages /> } />
        </Routes>
    </>
  );
}

export default App;
