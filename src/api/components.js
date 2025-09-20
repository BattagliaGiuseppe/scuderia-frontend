// src/api/components.js
import axios from 'axios';

export const getComponents = (token) => {
  return axios.get('/components', {
    headers: { Authorization: `Bearer ${token}` }
  });
};
