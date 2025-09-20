// src/pages/Maintenances.jsx
import { useEffect, useState } from 'react';
import { getMaintenances } from '../api/maintenances';

export default function Maintenances() {
  const [maintenances, setMaintenances] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    getMaintenances(token)
      .then(res => setMaintenances(res.data))
      .catch(err => console.error('Errore caricamento manutenzioni:', err));
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manutenzioni</h1>
      <ul>
        {maintenances.map(m => (
          <li key={m.id}>{m.name}</li>
        ))}
      </ul>
    </div>
  );
}
