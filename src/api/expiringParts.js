import axios from 'axios';

const expiringPartsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api', // aggiunge /api qui
});

export const getExpiringParts = async (token) => {
  const response = await expiringPartsApi.get('/expiring_parts', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export default expiringPartsApi;
