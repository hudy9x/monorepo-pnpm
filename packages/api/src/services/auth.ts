import { api } from '../lib/axios';

export const authService = {
  login: async (email: string, password: string) => {
    return api.post('/auth/login', { email, password });
  },
  
  logout: async () => {
    return api.post('/auth/logout');
  },
}; 