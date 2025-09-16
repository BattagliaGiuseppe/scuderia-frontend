import { useEffect, useState } from 'react';
import axios from '../api/expiringParts';
import AlertCard from '../components/AlertCard';

export default function ExpiringParts() {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/expiring_parts', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setParts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Parti a scadenza</h1>
      <div className="grid grid-cols-3 gap-4">
        {parts.map(p => <AlertCard key={p.id} part={p} />)}
      </div>
    </div>
  );
}
