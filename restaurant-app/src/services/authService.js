import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Replace with actual backend API URL

export default {
  login(email, password) {
    return axios.post(`${API_URL}/login`, { email, password });
  },

  register(username, email, password) {
    return axios.post(`${API_URL}/register`, { username, email, password });
  }
};
