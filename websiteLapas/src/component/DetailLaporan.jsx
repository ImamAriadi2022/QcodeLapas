import React, { useState, useEffect } from 'react';

const DetailLaporan = () => {
  const [laporan, setLaporan] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // State untuk gambar yang diperbesar
  const [selectedDescription, setSelectedDescription] = useState(''); // State untuk deskripsi gambar yang diperbesar

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/laporan.json');
      const data = await response.json();
      setLaporan(data);
    };

    fetchData();
  }, []);

  const filteredLaporan = laporan.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageClick = (image, description) => {
    setSelectedImage(image); // Set gambar yang dipilih
    setSelectedDescription(description); // Set deskripsi yang dipilih
  };

  return (
    <div className="container mt-4">
      <h5 className="text-center">Detail Laporan</h5>
      
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Cari laporan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row d-flex justify-content-center align-items-center pt-3">
        {filteredLaporan.map((item) => (
          <div className="col-6 col-md-3 mb-3" key={item.id}>
            <div className="card h-100 d-flex flex-column border p-2">
              {/* Gambar yang dapat diklik untuk membuka popup */}
              <img
                src={item.image}
                className="card-img-top img-fluid"
                alt={item.title}
                onClick={() => handleImageClick(item.image, item.description)} // Set gambar dan deskripsi yang dipilih
                style={{ cursor: 'pointer' }} // Mengganti kursor saat hover
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup untuk gambar yang diperbesar */}
      {selectedImage && (
        <div
          className="popup"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)', // Membuat latar belakang lebih gelap
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              position: 'relative',
              padding: '0', // Menghapus padding
              backgroundColor: 'transparent', // Menghapus latar belakang
              borderRadius: '0', // Menghapus border radius
              width: '100%', // Memastikan lebar penuh
              height: '100%', // Memastikan tinggi penuh
              overflow: 'hidden', // Menyembunyikan overflow
            }}
          >
            {/* Tombol Close */}
            <button
              onClick={() => {
                setSelectedImage(null); // Tutup popup
                setSelectedDescription(''); // Reset deskripsi saat tutup
              }}
              style={{
                position: 'absolute',
                top: '20px', // Menaikkan posisi tombol close
                right: '20px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px', // Memperbesar tombol close
                height: '40px',
                fontSize: '18px',
                cursor: 'pointer',
                zIndex: 1001, // Memastikan tombol di atas gambar
              }}
            >
              &times;
            </button>

            {/* Gambar yang diperbesar */}
            <img 
              src={selectedImage} 
              alt="Detail" 
              style={{ 
                width: '100%', // Memastikan gambar memenuhi lebar
                height: '100%', // Memastikan gambar memenuhi tinggi
                objectFit: 'contain', // Menjaga rasio aspek
              }} 
            />
            
            {/* Deskripsi Gambar di Kiri Bawah */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Latar belakang semi-transparan
                padding: '10px',
                borderRadius: '5px',
              }}
            >
              {selectedDescription}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailLaporan;
