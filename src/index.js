import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import { MoviesProvider } from './context/MoviesContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MoviesProvider>
    <Home />
    </MoviesProvider>
    </BrowserRouter>
  </React.StrictMode>
);


