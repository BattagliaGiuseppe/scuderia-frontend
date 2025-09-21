import axios from 'axios';

const maintenancesApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api',
});

export const getMaintenances = async (token) => {
  const response = await maintenancesApi.get('/maintenances', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const createMaintenance = async (token, data) => {
  const response = await maintenancesApi.post('/maintenances', data, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export default maintenancesApi;
