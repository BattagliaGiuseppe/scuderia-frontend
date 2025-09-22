import axios from 'axios';

const componentsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getComponents = async (token) => {
  const response = await componentsApi.get('/api/components', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export default componentsApi;
