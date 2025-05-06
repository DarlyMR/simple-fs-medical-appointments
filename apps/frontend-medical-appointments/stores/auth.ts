import { defineStore } from 'pinia';
import type { Patient } from '~/types/models';

interface AuthState {
  token: string | null;
  user: Patient | null;
  loading: boolean;
  error: string | null;
}

// Mock patient data
const mockPatient: Patient = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  dateOfBirth: '1985-05-15',
  gender: 'male',
  phone: '123-456-7890',
  address: '123 Main St',
  city: 'Medicalville',
  state: 'CA',
  zipCode: '12345',
  insuranceProvider: 'MediHealth Insurance',
  insuranceNumber: 'MH123456789',
  emergencyContact: 'Jane Doe',
  emergencyPhone: '987-654-3210',
  medicalHistory: 'No significant medical history',
  allergies: 'Penicillin',
  createdAt: '2023-01-15T12:00:00Z',
  updatedAt: '2023-05-20T14:30:00Z',
};

// Define the auth store
export const useAuthStore = defineStore('auth', {
  // State
  state: (): AuthState => ({
    token: null,
    user: null,
    loading: false,
    error: null,
  }),

  // Getters
  getters: {
    isAuthenticated: (state) => !!state.token && !!state.user,
    userFullName: (state) => state.user ? `${state.user.firstName} ${state.user.lastName}` : '',
  },

  // Actions
  actions: {
    /**
     * Login user action
     * TASK_ID: AUTH_001 - User login functionality
     */
    async login(email: string, password: string) {
      this.loading = true;
      this.error = null;

      try {
        // In a real app, this would be an API call to Strapi
        // const response = await $fetch('/api/auth/local', {
        //   method: 'POST',
        //   body: { identifier: email, password }
        // });
        
        // Simulate API response delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock successful login for now
        if (email === 'john.doe@example.com' && password === 'password') {
          this.token = 'mock_jwt_token';
          this.user = mockPatient;
          
          // Store token in localStorage for persistence across page reloads
          if (import.meta.client) {
            localStorage.setItem('token', this.token);
          }
          
          return true;
        } else {
          throw new Error('Credenciales invalidas');
        }
      } catch (error: any) {
        this.error = error.message || 'Failed to login';
        return false;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Register user action
     * TASK_ID: AUTH_002 - User registration functionality
     */
    async register(userData: Partial<Patient>) {
      this.loading = true;
      this.error = null;

      try {
        // In a real app, this would be an API call to Strapi
        // const response = await $fetch('/api/auth/local/register', {
        //   method: 'POST',
        //   body: userData
        // });
        
        // Simulate API response delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock successful registration
        this.token = 'mock_jwt_token';
        this.user = {
          ...mockPatient,
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          email: userData.email || '',
          // Include other fields as needed
        };
        
        // Store token in localStorage for persistence
        if (import.meta.client) {
          localStorage.setItem('token', this.token);
        }
        
        return true;
      } catch (error: any) {
        this.error = error.message || 'Failed to register';
        return false;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Logout user action
     * TASK_ID: AUTH_003 - User logout functionality
     */
    logout() {
      this.token = null;
      this.user = null;
      
      // Remove token from localStorage
      if (import.meta.client) {
        localStorage.removeItem('token');
      }
    },

    /**
     * Initialize auth state from stored token
     * TASK_ID: AUTH_004 - Persistent authentication
     */
    async init() {
      if (import.meta.client) {
        const token = localStorage.getItem('token');
        
        if (token) {
          this.token = token;
          
          try {
            // In a real app, this would verify the token with Strapi
            // const response = await $fetch('/api/users/me', {
            //   headers: {
            //     Authorization: `Bearer ${token}`
            //   }
            // });
            
            // For now, just use mock data
            this.user = mockPatient;
          } catch (error) {
            this.logout();
          }
        }
      }
    },

    /**
     * Update user profile
     * TASK_ID: AUTH_005 - User profile update
     */
    async updateProfile(profileData: Partial<Patient>) {
      if (!this.user) return false;
      
      this.loading = true;
      this.error = null;

      try {
        // In a real app, this would be an API call to Strapi
        // const response = await $fetch(`/api/patients/${this.user.id}`, {
        //   method: 'PUT',
        //   headers: {
        //     Authorization: `Bearer ${this.token}`
        //   },
        //   body: { data: profileData }
        // });
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Update local user data
        this.user = {
          ...this.user,
          ...profileData,
          updatedAt: new Date().toISOString()
        };
        
        return true;
      } catch (error: any) {
        this.error = error.message || 'Failed to update profile';
        return false;
      } finally {
        this.loading = false;
      }
    }
  }
});