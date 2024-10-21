import React from 'react';
import ShowDataLaporan from './showDataLaporan';
import ShowDataPegawai from './showDataPegawai';
import Clock from './TimeLampung';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHandSparkles } from 'react-icons/fa'; // Import ikon dari react-icons

function Home() {
  // URL gambar yang akan digunakan sebagai background
  return (
    <>
      <header style={{
        backgroundImage: `url('/assets/bgHeader.jpg')`,
        backgroundSize: 'cover', // Menjadikan gambar menutupi seluruh area
        backgroundPosition: 'center', // Posisi gambar di tengah
        height: '400px', // Sesuaikan tinggi header sesuai kebutuhan
        color: 'white', // Warna teks agar kontras dengan background
        display: 'flex', // Mengatur layout flex untuk center
        justifyContent: 'center', // Mengatur konten ke tengah
        alignItems: 'center', // Mengatur konten vertikal ke tengah
      }}>
        <div className="text-center">
          <h1 className="display-1">
            <FaHandSparkles style={{ marginRight: '10px' }} />
            Selamat Datang
          </h1>
          <p className="lead" style={{ fontStyle: 'italic', fontSize: '1.2rem' }}>
            di Website Laporan Pos Menara
          </p>
        </div>
      </header>
      <main className="px-2 pt-2">
        <section id='garis' className="border border-2 border-bottom-0 border-success rounded-4 p-3">
          <div className="laporan-section">
            <h4 className="text-center">Laporan Pos Menara</h4>
            <div className="laporan" id="laporan">
              {/* menampilkan data laporan */}
              <ShowDataLaporan />
            </div>
          </div>
          <br />
          <div id="garis" className="card bg-success h-100"></div>
          <br />
          <div className="pegawai">
            <h4 className="text-center">Data Pegawai</h4>
            <div className="pegawai" id="pegawai">
              {/* menampilkan data pegawai */}
              <ShowDataPegawai />
            </div>
          </div>
        </section>
        <section className="border border-2 border-bottom-0 border-success rounded-4 p-3">
          <div className="time-section">
            <div className="time" id="time">
              {/* menampilkan waktu */}
              <Clock />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
