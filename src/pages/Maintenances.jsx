import { useEffect, useState } from 'react';
import axios from '../api/maintenances';
import MaintenanceCard from '../components/MaintenanceCard';

export default function Maintenances() {
  const [maintenances, setMaintenances] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/maintenances', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setMaintenances(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manutenzioni</h1>
      <div className="grid grid-cols-3 gap-4">
        {maintenances.map(m => <MaintenanceCard key={m.id} maintenance={m} />)}
      </div>
    </div>
  );
}
