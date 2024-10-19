import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './component/Home';
import Laporan from './component/laporan';
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
      </Routes>

      {/* ini buat footer */}
      <Footer />
    </Router>

    
  );
}

export default App;
