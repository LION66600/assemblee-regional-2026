import axios from 'axios';
import {ApiResponse} from '../types';

const API_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token d'authentification
api.interceptors.request.use(
  (config) => {
    // TODO: Ajouter le token JWT depuis le store
    // const token = useAuthStore.getState().token;
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Intercepteur pour gérer les erreurs globales
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // TODO: Rediriger vers l'authentification
      console.log('Unauthorized - redirect to login');
    }
    return Promise.reject(error);
  },
);

export const apiClient = api;

// Export des fonctions utilitaires
export const get = <T,>(url: string) => api.get<ApiResponse<T>>(url);
export const post = <T,>(url: string, data: any) =>
  api.post<ApiResponse<T>>(url, data);
export const put = <T,>(url: string, data: any) =>
  api.put<ApiResponse<T>>(url, data);
export const del = <T,>(url: string) => api.delete<ApiResponse<T>>(url);