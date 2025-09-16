import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // cancella il token
    navigate('/login'); // reindirizza al login
  };

  return (
    <nav className="bg-gray-800 text-white h-16 flex items-center justify-between px-6 shadow-md">
      <div className="text-xl font-bold">BRC_Home</div>
      <div className="flex items-center gap-4">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
