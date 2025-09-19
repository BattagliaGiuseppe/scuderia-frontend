import axios from 'axios';

const api = axios.create({
  baseURL: 'https://scuderia-backend.onrender.com',
});

// Richiesta GET di tutti i veicoli
export const getVehicles = (token) => {
  return api.get('/vehicles', {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Puoi aggiungere altre funzioni per POST, PUT, DELETE ecc.
export const addVehicle = (token, vehicleData) => {
  return api.post('/vehicles', vehicleData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default api;
