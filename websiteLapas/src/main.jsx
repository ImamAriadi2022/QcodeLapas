import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Bootstrap 5.3 CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap 5.3 JavaScript bundle (includes Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// Render aplikasi ke elemen root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
