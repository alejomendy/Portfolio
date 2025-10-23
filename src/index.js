import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app.jsx'; 
import './Styles/index.css'; 

const REPO_NAME = '/Portfolio'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
   <BrowserRouter basename={REPO_NAME}> 
       <App /> 
   </BrowserRouter>
   </React.StrictMode>
);
