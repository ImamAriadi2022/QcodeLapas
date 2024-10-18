import React, { useState, useEffect } from 'react';
import DarkModeToggle from './component/DarkModeToggle';

function Navbar() {
  const [isNavbarTogglerVisible, setIsNavbarTogglerVisible] = useState(false);

  useEffect(() => {
    const checkNavbarTogglerVisibility = () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const isVisible = window.getComputedStyle(navbarToggler).display === 'block';
      setIsNavbarTogglerVisible(isVisible);
    };

    // Check visibility on mount
    checkNavbarTogglerVisibility();

    // Listen for window resize to check visibility
    window.addEventListener('resize', checkNavbarTogglerVisibility);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', checkNavbarTogglerVisibility);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
      <div className="container-fluid g-1">
        <img src="src/assets/logo.png" alt="Logo lapas" width="40" height="34" />
        <a className="navbar-brand d-flex align-items-center g-1" href="#">
          <span>Laporan Pos Menara</span>
          <span id="hid" className='navbar-toggler'>
            <DarkModeToggle />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            {/* Conditionally hide 'toggle' if navbar-toggler is visible */}
            {!isNavbarTogglerVisible && (
              <li className="nav-item" id="toggle">
                <DarkModeToggle />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
