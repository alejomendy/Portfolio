import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// ...

// 🚨 REEMPLAZA 'Portfolio' con el nombre exacto de tu repositorio.
// Debe coincidir con el nombre de tu repositorio de GitHub.
const PUBLIC_URL = 'https://alejomendy.github.io/Portfolio'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={PUBLIC_URL}> 
    </BrowserRouter>
  </React.StrictMode>
);