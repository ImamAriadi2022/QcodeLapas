import React, { useState, useEffect } from 'react';

function DarkModeToggle({ onToggle }) {
  // State untuk melacak apakah dark mode aktif atau tidak
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efek untuk menambahkan atribut data-bs-theme pada body dan nav
  useEffect(() => {
    const body = document.body;
    const nav = document.getElementById('navbar'); // Ambil elemen nav

    if (isDarkMode) {
      body.setAttribute('data-bs-theme', 'dark');
      nav.classList.add('bg-dark', 'navbar-dark'); // Tambahkan kelas untuk navbar gelap
    } else {
      body.setAttribute('data-bs-theme', 'light');
      nav.classList.remove('bg-dark', 'navbar-dark'); // Hapus kelas untuk navbar gelap
      nav.classList.add('bg-light', 'navbar-light'); // Tambahkan kelas untuk navbar terang
    }
  }, [isDarkMode]);

  // Fungsi untuk toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    onToggle(isDarkMode); // Panggil fungsi onToggle jika ada
  };

  return (
    <div className="text-center">
      <button
        className={`btn ${isDarkMode ? 'btn-dark btn-opacity-0' : 'btn-light btn-opacity-0'}`}
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <i className="bi bi-sun-fill" style={{ fontSize: '20px', color: 'white' }}></i> // Ikon Matahari
        ) : (
          <i className="bi bi-moon-fill" style={{ fontSize: '20px', color: 'black' }}></i> // Ikon Bulan
        )}
      </button>
    </div>
  );
}

export default DarkModeToggle;
