import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './navbar';  // Import komponen Navbar
// Import Bootstrap 5.3 CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap 5.3 JavaScript bundle (includes Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import bootstrap icon
import 'bootstrap-icons/font/bootstrap-icons.css';



// Render Navbar ke id="navbar"
ReactDOM.createRoot(document.getElementById('navbar')).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

// Render Main Content ke id="root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
