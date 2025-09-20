// src/api/maintenances.js
import axios from 'axios';

export const getMaintenances = (token) => {
  return axios.get('/maintenances', {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const createMaintenance = (token, data) => {
  return axios.post('/maintenances', data, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
