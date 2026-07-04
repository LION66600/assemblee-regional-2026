import {create} from 'zustand';
import {User} from '../types';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email: string, password: string) => {
    set({isLoading: true});
    try {
      // TODO: Implémenter la logique d'authentification
      // const response = await authService.login(email, password);
      // set({user: response.user, isAuthenticated: true});
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      set({isLoading: false});
    }
  },

  logout: () => {
    set({user: null, isAuthenticated: false});
  },

  setUser: (user) => {
    set({user, isAuthenticated: !!user});
  },
}));