import React, { useState, useEffect } from 'react';

function DarkModeToggle({ onToggle }) {
  // State untuk melacak apakah dark mode aktif atau tidak
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efek untuk menambahkan atribut data-bs-theme pada body dan nav
  useEffect(() => {
    const body = document.body;
    const nav = document.getElementById('navbar'); // Ambil elemen nav
    const links = document.querySelectorAll('footer a');
    const headingLima =  document.querySelectorAll('footer h5');
    const cardButton = document.querySelectorAll('div #cardButton1 button');
    const borderGlow = document.querySelectorAll('main section');
    const garisGlow = document.querySelectorAll('main section#garis div#garis');

    if (isDarkMode) {
      body.setAttribute('data-bs-theme', 'dark');
      nav.classList.add('bg-dark', 'navbar-dark'); // Tambahkan kelas untuk navbar gelap
      links.forEach((link) => {
        link.classList.remove('text-dark');
      });
      links.forEach((link) => {
        link.classList.add('text-light');
      });
      headingLima.forEach((heading) => {
        heading.classList.add('text-warning');
      });

      // ini untuk garis pemisah
      garisGlow.forEach((garis) =>{
        garis.classList.remove('bg-success')
      });
      garisGlow.forEach((garis) => {
        garis.classList.add('bg-warning');
      });
      // ini untuk garis pemisah


      // ini buat borderGlow di section
      borderGlow.forEach((glow) => {
        glow.classList.remove('border-success');
      });
      borderGlow.forEach((glow) => {
        glow.classList.add('border-warning');
      });
      // ini buat borderGlow di section

      // ini buat tombol
      cardButton.forEach((button) => {
        button.classList.remove('btn-success');
      });
      cardButton.forEach((button) => {
        button.classList.add('btn-warning');
      });
      // ini buat tombol

    } else {
      body.setAttribute('data-bs-theme', 'light');
      nav.classList.remove('bg-dark', 'navbar-dark'); // Hapus kelas untuk navbar gelap
      nav.classList.add('bg-light', 'navbar-light'); 
      links.forEach((link) => {
        link.classList.remove('text-light');
      });
      links.forEach((link) => {
        link.classList.add('text-dark');
      });
      // ini buat h5
      headingLima.forEach((heading) => {
        heading.classList.remove('text-warning');
      });
      headingLima.forEach((heading) => {
        heading.classList.add('text-success');
      });
      // ini buat h5

      // ini buat tombol
      cardButton.forEach((button) => {
        button.classList.add('btn-success');
      });
      cardButton.forEach((button) => {
        button.classList.remove('btn-warning');
      });
      // ini buat tombol
      // ini buat borderGlow di section
      borderGlow.forEach((glow) => {
        glow.classList.add('border-success');
      });
      borderGlow.forEach((glow) => {
        glow.classList.remove('border-warning');
      });
      // ini buat borderGlow di section

      // ini untuk garis pemisah
      garisGlow.forEach((garis) =>{
        garis.classList.add('bg-success')
      });
      garisGlow.forEach((garis) => {
        garis.classList.remove('bg-warning');
      });
      // ini untuk garis pemisah

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
          <i className="bi bi-moon-fill" style={{ fontSize: '20px', color: 'white' }}></i> // Ikon Matahari
        ) : (
          <i className="bi bi-sun-fill" style={{ fontSize: '20px', color: 'black' }}></i> // Ikon Bulan
        )}
      </button>
    </div>
  );
}

export default DarkModeToggle;
