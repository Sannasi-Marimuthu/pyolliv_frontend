// /axios/axios.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://backend-2-rkqo.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = {
  getAll: (entity) => apiClient.get(`/${entity}`),
  getById: (entity, id) => apiClient.get(`/${entity}/${id}`),
  post: (entity, data) => apiClient.post(`/${entity}`, data),
  put: (entity, data) => apiClient.put(`/${entity}`, data),
  delete: (entity, id) => apiClient.delete(`/${entity}/${id}`),
};