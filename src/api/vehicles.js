import axios from 'axios';

const API_URL = 'https://scuderia-backend.onrender.com/api';

export const getVehicles = (token) => {
  return axios.get(`${API_URL}/vehicles`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const createVehicle = (token, data) => {
  return axios.post(`${API_URL}/vehicles`, data, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
