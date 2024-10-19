import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MasaJabatan = ({ masaAkhir }) => {
    const [currentTime, setCurrentTime] = useState(null);
    const [sisaMasa, setSisaMasa] = useState('');

    useEffect(() => {
        const fetchCurrentTime = async () => {
            try {
                const response = await axios.get('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jakarta');
                setCurrentTime(new Date(response.data.dateTime));
            } catch (error) {
                console.error("Error fetching current time:", error);
            }
        };

        fetchCurrentTime();

        const interval = setInterval(() => {
            fetchCurrentTime();
        }, 1000); // Update waktu setiap detik

        return () => clearInterval(interval); // Clear interval saat komponen di-unmount
    }, []);

    useEffect(() => {
        if (currentTime && masaAkhir) {
            const endTime = new Date(masaAkhir.split("/").reverse().join("-")); // Konversi dari format 'dd/mm/yyyy'
            const diffTime = endTime - currentTime; // Selisih waktu
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Konversi ke hari

            setSisaMasa(diffDays > 0 ? `Jabatan berakhir dalam ${diffDays} hari` : `Masa jabatan sudah berakhir`);
        }
    }, [currentTime, masaAkhir]);

    return (
        <p>{sisaMasa}</p>
    );
};

export default MasaJabatan;
