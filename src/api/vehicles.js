import axios from 'axios';

const vehiclesApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getVehicles = async (token) => {
  const response = await vehiclesApi.get('/api/vehicles', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const createVehicle = async (token, data) => {
  const response = await vehiclesApi.post('/api/vehicles', data, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export default vehiclesApi;
