import axios from 'axios';

const usersApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getUsers = async (token) => {
  const response = await usersApi.get('/api/users', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export default usersApi;
