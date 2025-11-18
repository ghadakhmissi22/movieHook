import React, { createContext, useState } from 'react';
import moviesData from '../moviesData';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(moviesData || []);
  // expose setmovies (nom attendu dans App.js)
  return (
    <MoviesContext.Provider value={{ movies, setmovies: setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};