import React from 'react';
import ShowDataLaporan from './showDataLaporan';
import TimeLampung from './TimeLampung';

function Home() {
  return (
    <>
        <header>
        <div className="text-center">
          <h1 className="display-1">Selamat Datang</h1>
          <p className="lead">di Website Laporan Pos Menara</p>
        </div>
      </header>
      <main className="px-2">
        <section className="border border-2 border-bottom-0 border-success rounded-4 p-3">
          <div className="laporan-section">
            <h6 className="text-start">Laporan Pos Menara</h6>
            <div className="laporan" id="laporan">
                {/* menampilkan data laporan */}
                <ShowDataLaporan />
            </div>
          </div>
          <br></br>
          <div className="card bg-success h-100"></div>
          <br></br>
          <div className="pegawai">
            <h6 className="text-start">Data Pegawai</h6>
            <div className="pegawai" id="pegawai">
                {/* menampilkan data pegawai */}
            </div>
          </div>
        </section>
        <section className="border border-2 border-bottom-0 border-success rounded-4 p-3">
          <div className="time-section">
            <h6 className="text-start">Waktu Sekarang</h6>
            <div className="time" id="time">
                {/* menampilkan waktu */}
                <TimeLampung />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
