import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const links = [
    { name: 'Dashboard', path: '/' },
    { name: 'Veicoli', path: '/vehicles' },
    { name: 'Componenti', path: '/components' },
    { name: 'Manutenzioni', path: '/maintenances' },
    { name: 'Parti a scadenza', path: '/expiring-parts' },
    { name: 'Gare', path: '/races' },
    { name: 'Utenti', path: '/users' },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <ul className="flex flex-col gap-2">
        {links.map(link => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'block bg-gray-700 px-4 py-2 rounded'
                  : 'block hover:bg-gray-700 px-4 py-2 rounded'
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
