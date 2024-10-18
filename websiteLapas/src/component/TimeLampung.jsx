import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TimeLampung() {
  const [timeData, setTimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch time data from API
    const fetchTime = async () => {
      try {
        const response = await axios.get('http://dateandtimeapi.com/api/v1/timezone/Asia/Jakarta');
        setTimeData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchTime();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Waktu di Metro, Lampung</h2>
      {timeData && (
        <p>{new Date(timeData.datetime).toLocaleString()}</p>
      )}
    </div>
  );
}

export default TimeLampung;
