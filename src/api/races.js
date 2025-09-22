import axios from 'axios';

const racesApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getRaces = async (token) => {
  const response = await racesApi.get('/api/races', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export default racesApi;
