// src/pages/Components.jsx
import { useEffect, useState } from 'react';
import { getComponents } from '../api/components';

export default function ComponentsPage() {
  const [components, setComponents] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    getComponents(token)
      .then(res => setComponents(res.data))
      .catch(err => console.error('Errore caricamento componenti:', err));
  }, [token]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Componenti</h1>
      <ul>
        {components.map(c => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}
