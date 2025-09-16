import { useEffect, useState } from 'react';
import axios from '../api/vehicles';
import AlertCard from '../components/AlertCard';
import VehicleCard from '../components/VehicleCard';

export default function Dashboard() {
  const [vehicles, setVehicles] = useState([]);
  const [expiringParts, setExpiringParts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/vehicles', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setVehicles(res.data))
      .catch(err => console.log(err));

    axios.get('/expiring_parts', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setExpiringParts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {vehicles.map(v => <VehicleCard key={v.id} vehicle={v} />)}
      </div>
      <h2 className="text-xl font-semibold mb-2">Scadenze Parti</h2>
      <div className="grid grid-cols-3 gap-4">
        {expiringParts.map(p => <AlertCard key={p.id} part={p} />)}
      </div>
    </div>
  );
}
