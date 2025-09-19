// src/api/expiringParts.js
import axios from 'axios';

export const getExpiringParts = (token) => {
  return axios.get('/expiring_parts', {
    headers: { Authorization: `Bearer ${token}` }
  });
};
