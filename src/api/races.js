import axios from 'axios';

const racesApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default racesApi;
