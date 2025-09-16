import axios from 'axios';

const API_URL = 'https://scuderia-backend.onrender.com/api';
export default axios.create({
  baseURL: API_URL
});
