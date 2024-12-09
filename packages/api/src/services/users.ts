import type { User } from '../types';
import { api } from '../lib/axios';

export const userService = {
  getCurrentUser: async () => {
    const response = await api.get<User>('/users/me');
    return response.data;
  }
}; 