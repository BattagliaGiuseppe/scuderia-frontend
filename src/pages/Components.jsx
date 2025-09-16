import { useEffect, useState } from 'react';
import axios from '../api/components';
import ComponentCard from '../components/ComponentCard';

export default function ComponentsPage() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/components', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setComponents(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Componenti Principali</h1>
      <div className="grid grid-cols-3 gap-4">
        {components.map(c => <ComponentCard key={c.id} component={c} />)}
      </div>
    </div>
  );
}
