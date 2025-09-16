import axios from 'axios';

const API_URL = 'https://tuo-backend.onrender.com/api'; // Cambia con il tuo URL Render

export default axios.create({
  baseURL: API_URL
});
