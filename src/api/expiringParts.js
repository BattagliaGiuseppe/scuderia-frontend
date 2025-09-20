import axios from 'axios';

const expiringPartsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// funzione che chiama l'endpoint delle parti in scadenza
export const getExpiringParts = async () => {
  const response = await expiringPartsApi.get('/expiring-parts');
  return response.data;
};

export default expiringPartsApi;
