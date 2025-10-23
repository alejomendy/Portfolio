// Ejemplo de cómo se vería tu archivo principal (ej. index.js)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './app.jsx'; 

// Asume que el nombre de tu repositorio es 'Portfolio'
// Si tu URL es: https://alejomendy.github.io/Portfolio/
const PUBLIC_URL = 'https://alejomendy.github.io/Portfolio'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={PUBLIC_URL}> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);