import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './component/Home';
import Laporan from './component/laporan';
import DetailLaporan from './component/DetailLaporan';
import DetailPegawai from './component/DetailPegawai';
import Footer from './footer';

function App() {
  return (
    <Router>
      {/* Navbar selalu ditampilkan di semua halaman */}
      <Navbar />

      {/* Routes untuk halaman yang berbeda */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/detail-laporan" element={<DetailLaporan />} />
        <Route path="/detail-pegawai" element={<DetailPegawai />} />
      </Routes>

      {/* ini buat footer */}
      <Footer />
    </Router>

    
  );
}

export default App;
