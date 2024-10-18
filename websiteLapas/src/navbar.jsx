import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './component/DarkModeToggle';

function Navbar() {
  const [isNavbarTogglerVisible, setIsNavbarTogglerVisible] = useState(false);

  useEffect(() => {
    const checkNavbarTogglerVisibility = () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const isVisible = window.getComputedStyle(navbarToggler).display === 'block';
      setIsNavbarTogglerVisible(isVisible);
    };

    checkNavbarTogglerVisibility();
    window.addEventListener('resize', checkNavbarTogglerVisibility);
    return () => window.removeEventListener('resize', checkNavbarTogglerVisibility);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
      <div className="container-fluid g-1">
        <Link className="navbar-brand d-flex align-items-center g-1" to="/">
          <span>Laporan Pos Menara</span>
          <span id="hid" className="navbar-toggler p-0">
            <DarkModeToggle />
          </span>
        </Link>
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
              <Link className="nav-link active" to="/">
                Halaman utama
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/laporan">
                Buat laporan
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Hubungi
              </Link>
            </li>
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
