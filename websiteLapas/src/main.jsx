import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import Bootstrap 5.3 CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap 5.3 JavaScript bundle (includes Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
