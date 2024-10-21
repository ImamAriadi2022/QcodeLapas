import React, { useState, useEffect } from 'react';
import MasaJabatan from './masaJabatan'; // Pastikan nama komponen dan path sesuai

const DetailPegawai = () => {
    const [pegawai, setPegawai] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedImage, setSelectedImage] = useState(null); // State untuk gambar yang diperbesar

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('src/data/dataPegawai.json');
            const data = await response.json();
            setPegawai(data);
        };

        fetchData();
    }, []);

    const filteredPegawai = pegawai.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h5 className="text-center">Detail Data Pegawai</h5>

            {/* Input Pencarian */}
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Cari pegawai..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Card Data Pegawai */}
            <div className="row d-flex justify-content-center align-items-center pt-3">
                {filteredPegawai.map((item) => (
                    <div className="col-6 col-md-3 mb-3" key={item.id}>
                        <div className="card h-100 d-flex flex-column border p-2">
                            {/* Gambar yang dapat diklik untuk membuka popup */}
                            <img
                                src={item.image}
                                className="card-img-top img-fluid"
                                alt={item.title}
                                onClick={() => setSelectedImage(item.image)} // Set gambar yang dipilih
                                style={{ cursor: 'pointer' }} // Mengganti kursor saat hover
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">
                                    <MasaJabatan masaAkhir={item.Masa} /> {/* Menampilkan masa jabatan */}
                                </p>
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
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            padding: '20px',
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                        }}
                    >
                        {/* Tombol Close */}
                        <button
                            onClick={() => setSelectedImage(null)} // Tutup popup
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                fontSize: '16px',
                                cursor: 'pointer',
                            }}
                        >
                            &times;
                        </button>

                        {/* Gambar yang diperbesar */}
                        <img src={selectedImage} alt="Detail" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailPegawai;
