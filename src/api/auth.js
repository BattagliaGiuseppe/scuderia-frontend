import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://scuderia-backend.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Se hai bisogno di aggiungere il token in automatico a ogni richiesta:
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
