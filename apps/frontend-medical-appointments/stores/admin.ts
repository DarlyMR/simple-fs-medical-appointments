import { defineStore } from 'pinia';

interface Admin {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface AdminState {
  token: string | null;
  admin: Admin | null;
  loading: boolean;
  error: string | null;
}

// Mock admin data
const mockAdmin: Admin = {
  id: 1,
  name: 'Admin User',
  email: 'admin@medictest.com',
  role: 'administrator'
};

// Define the admin store
export const useAdminStore = defineStore('admin', {
  // State
  state: (): AdminState => ({
    token: null,
    admin: null,
    loading: false,
    error: null,
  }),

  // Getters
  getters: {
    isAuthenticated: (state) => !!state.token && !!state.admin,
  },

  // Actions
  actions: {
    /**
     * Login admin action
     * TASK_ID: ADMIN_001 - Admin login functionality
     */
    async login(email: string, password: string) {
      this.loading = true;
      this.error = null;

      try {
        // In a real app, this would be an API call to Strapi
        // const response = await $fetch('/api/admin/login', {
        //   method: 'POST',
        //   body: { email, password }
        // });
        
        // Simulate API response delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock successful login for now
        if (email === 'admin@medictest.com' && password === 'admin123') {
          this.token = 'mock_admin_jwt_token';
          this.admin = mockAdmin;
          
          // Store token in localStorage for persistence across page reloads
          if (import.meta.client) {
            localStorage.setItem('admin_token', this.token);
          }
          
          return true;
        } else {
          throw new Error('Credenciales invalidas'); // Invalid credentials
        }
      } catch (error: any) {
        this.error = error.message || 'Failed to login';
        return false;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Logout admin action
     * TASK_ID: ADMIN_002 - Admin logout functionality
     */
    logout() {
      this.token = null;
      this.admin = null;
      
      // Remove token from localStorage
      if (import.meta.client) {
        localStorage.removeItem('admin_token');
      }
    },

    /**
     * Initialize admin auth state from stored token
     * TASK_ID: ADMIN_003 - Persistent admin authentication
     */
    async init() {
      if (import.meta.client) {
        const token = localStorage.getItem('admin_token');
        
        if (token) {
          this.token = token;
          
          try {
            // In a real app, this would verify the token with Strapi
            // const response = await $fetch('/api/admin/me', {
            //   headers: {
            //     Authorization: `Bearer ${token}`
            //   }
            // });
            
            // For now, just use mock data
            this.admin = mockAdmin;
          } catch (error) {
            this.logout();
          }
        }
      }
    }
  }
});