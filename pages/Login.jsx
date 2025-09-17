import { useState } from 'react';
import axios from '../api/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', { username: email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      const serverMsg = err?.response?.data?.error || err?.response?.data?.message || err.message || 'Errore login';
      alert(serverMsg);
      console.error('Login error:', err);
    }
  };

  return (
    // ... tuo codice JSX del form
  );
}
