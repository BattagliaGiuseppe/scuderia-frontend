import axios from 'axios';

const expiringPartsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // niente fallback localhost
});

export default expiringPartsApi;
