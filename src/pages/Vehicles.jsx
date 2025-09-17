import { useEffect, useState } from 'react';
import axios from '../api/vehicles';
import VehicleCard from '../components/VehicleCard';

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/vehicles', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setVehicles(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Veicoli</h1>
      <div className="grid grid-cols-3 gap-4">
        {vehicles.map(v => <VehicleCard key={v.id} vehicle={v} />)}
      </div>
    </div>
  );
}
