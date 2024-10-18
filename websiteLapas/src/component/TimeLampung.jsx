import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Clock = () => {
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await axios.get('https://worldtimeapi.org/api/timezone/Asia/Jakarta'); // Pastikan URL benar
        setTime(response.data.datetime); // Mengambil waktu saat ini
      } catch (error) {
        setError(error.message); // Menangkap error
      } finally {
        setLoading(false); // Menandakan loading selesai
      }
    };

    fetchTime();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Waktu Saat Ini di Jakarta</h2>
      <p>{new Date(time).toLocaleString()}</p> {/* Format waktu lokal */}
    </div>
  );
};

export default Clock;
