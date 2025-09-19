import { useEffect, useState } from 'react';
import { getVehicles } from '../api/vehicles';
import VehicleCard from '../components/VehicleCard';

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    getVehicles(token)
      .then(data => setVehicles(data))
      .catch(err => console.error(err));
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
