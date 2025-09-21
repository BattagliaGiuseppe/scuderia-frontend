// src/api/maintenances.js
import axios from 'axios';

const API_URL = 'https://scuderia-backend.onrender.com/api';

export const getMaintenances = (token) => {
  return axios.get(`${API_URL}/maintenances`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const createMaintenance = (token, data) => {
  return axios.post(`${API_URL}/maintenances`, data, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
