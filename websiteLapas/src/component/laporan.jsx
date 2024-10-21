import React, { useState, useEffect } from 'react';

function Laporan() {
    const backgroundImage = '/assets/bgHeader.jpg';

    // State untuk laporan
    const [judulLaporan, setJudulLaporan] = useState('');
    const [pelapor, setPelapor] = useState('');
    const [status, setStatus] = useState('aman');
    const [gambar, setGambar] = useState(null);
    const [lokasi, setLokasi] = useState('');
    const [waktu, setWaktu] = useState('');

    // State untuk pegawai
    const [showPegawaiForm, setShowPegawaiForm] = useState(false);
    const [password, setPassword] = useState('');
    const [namaPegawai, setNamaPegawai] = useState('');
    const [masaJabatan, setMasaJabatan] = useState('');
    const [fotoPegawai, setFotoPegawai] = useState(null);

    // Fetch lokasi otomatis
    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords;
                    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
                        .then((response) => response.json())
                        .then((data) => {
                            const { village, town, county, state, country } = data.address;
                            setLokasi(`${village || town}, ${county}, ${state}, ${country}`);
                        })
                        .catch((error) => console.error('Error fetching location:', error));
                });
            } else {
                alert("Geolocation tidak didukung oleh browser ini.");
            }
        };

        getLocation();
        const currentTime = new Date().toLocaleString();
        setWaktu(currentTime);
    }, []);

    // Handler untuk mengirim laporan
    const handleLaporanSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('judulLaporan', judulLaporan);
        formData.append('pelapor', pelapor);
        formData.append('status', status);
        formData.append('gambar', gambar);
        formData.append('lokasi', lokasi);
        formData.append('waktu', waktu);

        try {
            const response = await fetch('YOUR_API_ENDPOINT_FOR_LAPORAN', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Laporan berhasil dikirim!');
            } else {
                alert('Gagal mengirim laporan.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan saat mengirim laporan.');
        }
    };

    // Handler untuk menampilkan form pegawai jika password benar
    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            setShowPegawaiForm(true);
        } else {
            alert('Password salah!');
        }
    };

    // Handler untuk mengirim data pegawai
    const handlePegawaiSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('namaPegawai', namaPegawai);
        formData.append('masaJabatan', masaJabatan);
        formData.append('fotoPegawai', fotoPegawai);

        try {
            const response = await fetch('YOUR_API_ENDPOINT_FOR_PEGAWAI', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Data pegawai berhasil dikirim!');
            } else {
                alert('Gagal mengirim data pegawai.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan saat mengirim data pegawai.');
        }
    };

    // Fungsi untuk kembali ke form laporan
    const handleBack = () => {
        setShowPegawaiForm(false);
        setPassword('');
        setNamaPegawai('');
        setMasaJabatan('');
        setFotoPegawai(null);
    };

    return (
        <>
            <header style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div className="text-center">
                    <h1 className="display-1">
                        Halaman Laporan
                    </h1>
                </div>
            </header>
            <main className="container mt-4">
                <h2>Form Penginputan Laporan</h2>
                <form onSubmit={handleLaporanSubmit}>
                    <div className="mb-3">
                        <label htmlFor="judulLaporan" className="form-label">Judul Laporan</label>
                        <input type="text" className="form-control" id="judulLaporan" value={judulLaporan} onChange={(e) => setJudulLaporan(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pelapor" className="form-label">Pelapor</label>
                        <input type="text" className="form-control" id="pelapor" value={pelapor} onChange={(e) => setPelapor(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status Keadaan</label>
                        <select className="form-select" id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
                            <option value="aman">Aman</option>
                            <option value="tidak aman">Tidak Aman</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gambar" className="form-label">Upload Gambar</label>
                        <input type="file" className="form-control" id="gambar" onChange={(e) => setGambar(e.target.files[0])} required />
                        <small className="form-text text-muted">Lokasi: {lokasi} | Waktu: {waktu}</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Kirim Laporan</button>
                </form>

                <h2 className="mt-5">Form Input Pegawai</h2>
                <form onSubmit={handlePasswordSubmit} className="mb-4">
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-success">Masuk</button>
                </form>

                {showPegawaiForm && (
                    <>
                        <form onSubmit={handlePegawaiSubmit}>
                            <div className="mb-3">
                                <label htmlFor="namaPegawai" className="form-label">Nama Pegawai</label>
                                <input type="text" className="form-control" id="namaPegawai" value={namaPegawai} onChange={(e) => setNamaPegawai(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="masaJabatan" className="form-label">Masa Jabatan (sampai tanggal)</label>
                                <input type="date" className="form-control" id="masaJabatan" value={masaJabatan} onChange={(e) => setMasaJabatan(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fotoPegawai" className="form-label">Upload Foto</label>
                                <input type="file" className="form-control" id="fotoPegawai" onChange={(e) => setFotoPegawai(e.target.files[0])} required />
                            </div>
                            <button type="submit" className="btn btn-primary">Kirim Data Pegawai</button>
                        </form>
                        <button className="btn btn-secondary mt-3" onClick={handleBack}>Kembali ke Form Laporan</button>
                    </>
                )}
            </main>
        </>
    );
}

export default Laporan;
