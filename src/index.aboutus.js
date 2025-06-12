import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutUs from './components/AboutUs';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutUs />
  </React.StrictMode>
);

reportWebVitals();
