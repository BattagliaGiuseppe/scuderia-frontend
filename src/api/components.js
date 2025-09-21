import axios from 'axios';

const componentsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api',
});

export const getComponents = async (token) => {
  const response = await componentsApi.get('/components', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createComponent = async (token, data) => {
  const response = await componentsApi.post('/components', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default componentsApi;
