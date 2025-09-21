import axios from 'axios';

const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api',
});

export const login = async (username, password) => {
  const response = await authApi.post('/login', { username, password });
  return response.data;
};

export const register = async (username, password, role) => {
  const response = await authApi.post('/register', { username, password, role });
  return response.data;
};

export default authApi;
