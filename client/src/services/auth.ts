import axios from 'axios';
import { AuthResponse, User } from '../types/auth';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const signup = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/signup`, { email, password });
  return response.data;
};

export const logout = async (): Promise<void> => {
  await axios.post(`${API_URL}/logout`);
};

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    const response = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const authService = {
  login,
  signup,
  logout,
  getCurrentUser
};