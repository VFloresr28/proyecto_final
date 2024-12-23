import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proyecto-final-11.onrender.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
