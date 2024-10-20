import React, { useEffect, useState } from 'react';

const ShowDataLaporan = () => {
  const [laporan, setLaporan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('src/data/laporan.json'); // Pastikan path sesuai
        if (!response.ok) {
          throw new Error('Respon tidak baik: ' + response.status);
        }
        const data = await response.json();
        setLaporan(data); // Set laporan langsung dari data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div id="cardButton1" className="container mt-4">
      <h5 className="text-center">Data Laporan</h5>
      <div className="row d-flex justify-content-center align-items-center pt-3">
        {laporan.map((item) => (
          <div className="col-6 col-md-3 mb-3" key={item.id}>
            <div className="card h-100 d-flex flex-column border p-2">
              <img src={item.image} className="card-img-top img-fluid" alt={item.title} />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text fs-7 fs-md-7 fs-lg-4">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Tombol More Laporan */}
      <div className="text-center mt-4">
        <button className="btn btn-success" onClick={() => alert('Navigasi ke halaman lebih banyak laporan')}>
          Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default ShowDataLaporan;
