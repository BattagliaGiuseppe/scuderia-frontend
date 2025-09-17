import { useState } from 'react';
import axios from 'axios'; // usa axios direttamente
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // invia direttamente la richiesta al backend
      const res = await axios.post('https://scuderia-backend.onrender.com/api/login', {
        username: email,
        password
      });

      // salva token in localStorage
      localStorage.setItem('token', res.data.token);

      // reindirizza alla home
      navigate('/');
    } catch (err) {
      const serverMsg = err?.response?.data?.error || err?.response?.data?.message || err.message || 'Errore login';
      alert(serverMsg);
      console.error('Login error:', err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">BRC_Home - Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
