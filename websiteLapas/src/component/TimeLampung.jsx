import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Clock = () => {
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await axios.get('https://worldtimeapi.org/api/timezone/Asia/Jakarta'); // Memastikan URL benar
        setTime(response.data.datetime); // Mengambil waktu saat ini
      } catch (error) {
        setError(error.message); // Menangkap error jika ada
      } finally {
        setLoading(false); // Menandakan loading selesai
      }
    };

    fetchTime();

    // Update waktu setiap detik
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        return new Date(prevTime).setSeconds(new Date(prevTime).getSeconds() + 1); // Update detik
      });
    }, 1000);

    // Membersihkan interval saat komponen dilepas
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Format waktu: hari, tanggal, bulan, tahun, jam
  const formatDateTime = (time) => {
    const date = new Date(time);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Intl.DateTimeFormat('id-ID', options).format(date); // Format dengan bahasa Indonesia
  };

  return (
    <div>
      <h7>Waktu Saat Ini di Kota Metro</h7>
      <p className="fs-7">{formatDateTime(time)}</p> {/* Menampilkan format waktu yang telah diatur */}
    </div>
  );
};

export default Clock;
