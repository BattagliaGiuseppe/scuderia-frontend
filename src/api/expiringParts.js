import axios from 'axios';

const expiringPartsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api',
});

export const getExpiringParts = async (token) => {
  const response = await expiringPartsApi.get('/expiring_parts', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createExpiringPart = async (token, data) => {
  const response = await expiringPartsApi.post('/expiring_parts', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default expiringPartsApi;
