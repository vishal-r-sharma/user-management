import axios from 'axios';
import { LoginCredentials, User, ApiResponse } from '../types';

const BASE_URL = 'https://reqres.in/api';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (credentials: LoginCredentials) => {
  const response = await api.post('/login', credentials);
  return response.data;
};

export const getUsers = async (page: number = 1) => {
  const response = await api.get<ApiResponse<User[]>>(`/users?page=${page}`);
  return response.data;
};

export const updateUser = async (id: number, userData: Partial<User>) => {
  const response = await api.put(`/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id: number) => {
  await api.delete(`/users/${id}`);
};