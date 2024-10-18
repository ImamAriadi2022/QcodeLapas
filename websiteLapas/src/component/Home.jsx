import React from 'react';

function Home() {
  return (
    <>
        <header>
        <div className="text-center">
          <h1 className="display-1">Selamat Datang</h1>
          <p className="lead">di Website Laporan Pos Menara</p>
        </div>
      </header>
      <main>
        <section className="frame1">
          <div className="laporan-section" id="laporan"></div>
        </section>
        <section className="frame2">
          <div className="pegawai" id="pegawai"></div>
        </section>
      </main>
    </>
  );
}

export default Home;
