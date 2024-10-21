import React, { useEffect, useState } from 'react';
import MasaJabatan from './masaJabatan'; // Pastikan nama komponen dan path sesuai
import { useNavigate } from 'react-router-dom';

const ShowDataPegawai = () => {
    const [pegawai, setPegawai] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('src/data/dataPegawai.json'); // Pastikan path sesuai
                if (!response.ok) {
                    throw new Error('Respon tidak baik: ' + response.status);
                }
                const data = await response.json();
                setPegawai(data);
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
            <h6 className="text-center">Berikut ini adalah data pegawai</h6>
            <div className="row d-flex justify-content-center align-items-center pt-3">
                {pegawai.map((item) => (
                    <div className="col-6 col-md-3 mb-3" key={item.id}>
                        <div className="card h-100 d-flex flex-column border p-2">
                            <img src={item.image} className="card-img-top img-fluid" alt={item.title} />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">
                                    <MasaJabatan masaAkhir={item.Masa} /> {/* Mengirim masa jabatan */}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Tombol More Pegawai */}
            <div className="text-center mt-4">
                <button className="btn btn-success" onClick={() => navigate('/detail-pegawai')}>
                    Selengkapnya
                </button>
            </div>
        </div>
    );
};

export default ShowDataPegawai;
