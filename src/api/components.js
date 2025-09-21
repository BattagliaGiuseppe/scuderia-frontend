import axios from 'axios';

const API_URL = 'https://scuderia-backend.onrender.com/api';

export const getComponents = (token) => {
  return axios.get(`${API_URL}/components`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const createComponent = (token, data) => {
  return axios.post(`${API_URL}/components`, data, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
