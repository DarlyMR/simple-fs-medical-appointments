import { defineStore } from 'pinia';
import type { Appointment, Doctor, StrapiArrayResponse } from '~/types/models';

interface AppointmentState {
  appointments: Appointment[];
  filteredAppointments: Appointment[];
  currentAppointment: Appointment | null;
  loading: boolean;
  error: string | null;
}

// Mock appointment data
const mockAppointments: Appointment[] = [
  {
    date: '2024-05-15',
    startTime: '09:00',
    endTime: '09:30',
    status: 'scheduled',
    reason: 'Annual checkup',
    notes: 'Patient requested morning appointment',
    createdAt: '2024-04-01T10:15:00Z',
    updatedAt: '2024-04-01T10:15:00Z',
    doctor: {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@medictest.com',
      phone: '555-123-4567',
      specialty: 'General Medicine',
      education: 'Medical University',
      experience: '10 years',
      licenseNumber: 'MD12345',
      bio: 'Experienced general practitioner',
      isActive: true,
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      workingHours: {
        start: '08:00',
        end: '17:00'
      },
      createdAt: '2023-01-01T08:00:00Z',
      updatedAt: '2023-01-01T08:00:00Z',
    }
  },
  {
    date: '2024-06-10',
    startTime: '14:00',
    endTime: '14:30',
    status: 'scheduled',
    reason: 'Follow-up appointment',
    notes: '',
    createdAt: '2024-04-05T15:20:00Z',
    updatedAt: '2024-04-05T15:20:00Z',
    doctor: {
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.johnson@medictest.com',
      phone: '555-987-6543',
      specialty: 'Cardiology',
      education: 'Heart University',
      experience: '15 years',
      licenseNumber: 'CD54321',
      bio: 'Specialist in cardiovascular health',
      isActive: true,
      workingDays: ['Monday', 'Wednesday', 'Friday'],
      workingHours: {
        start: '09:00',
        end: '16:00'
      },
      createdAt: '2023-01-02T09:00:00Z',
      updatedAt: '2023-01-02T09:00:00Z',
    }
  },
  {
    date: '2024-04-20',
    startTime: '10:00',
    endTime: '10:30',
    status: 'completed',
    reason: 'Flu symptoms',
    notes: 'Prescribed antibiotics',
    createdAt: '2024-04-10T11:30:00Z',
    updatedAt: '2024-04-20T10:45:00Z',
    doctor: {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@medictest.com',
      phone: '555-123-4567',
      specialty: 'General Medicine',
      education: 'Medical University',
      experience: '10 years',
      licenseNumber: 'MD12345',
      bio: 'Experienced general practitioner',
      isActive: true,
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      workingHours: {
        start: '08:00',
        end: '17:00'
      },
      createdAt: '2023-01-01T08:00:00Z',
      updatedAt: '2023-01-01T08:00:00Z',
    }
  }
];

// Define the appointment store
export const useAppointmentStore = defineStore('appointment', {
  // State
  state: (): AppointmentState => ({
    appointments: [],
    filteredAppointments: [],
    currentAppointment: null,
    loading: false,
    error: null,
  }),

  // Getters
  getters: {
    upcomingAppointments: (state) => {
      return state.appointments.filter(appointment => 
        appointment.status === 'scheduled' && 
        new Date(`${appointment.date}T${appointment.startTime}`) > new Date()
      ).sort((a, b) => 
        new Date(`${a.date}T${a.startTime}`).getTime() - 
        new Date(`${b.date}T${b.startTime}`).getTime()
      );
    },
    pastAppointments: (state) => {
      return state.appointments.filter(appointment => 
        appointment.status === 'completed' || 
        appointment.status === 'cancelled' ||
        appointment.status === 'no-show' ||
        new Date(`${appointment.date}T${appointment.startTime}`) <= new Date()
      ).sort((a, b) => 
        new Date(`${b.date}T${b.startTime}`).getTime() - 
        new Date(`${a.date}T${a.startTime}`).getTime()
      );
    },
  },

  // Actions
  actions: {
    /**
     * Fetch all appointments for the current patient
     * TASK_ID: APPT_001 - Fetch patient appointments
     */
    async fetchAppointments() {
      this.loading = true;
      this.error = null;

      try {
        // In a real app, this would be an API call to Strapi
        // const response = await $fetch<StrapiArrayResponse<Appointment>>('/api/appointments', {
        //   params: {
        //     'filters[patient][id][$eq]': patientId,
        //     'populate': '*'
        //   }
        // });
        
        // Simulate API response delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Use mock data for now
        this.appointments = mockAppointments;
        this.filteredAppointments = mockAppointments;
        
        return this.appointments;
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch appointments';
        return [];
      } finally {
        this.loading = false;
      }
    },

    /**
     * Fetch a single appointment by ID
     * TASK_ID: APPT_002 - Fetch appointment details
     */
    async fetchAppointment(id: number) {
      this.loading = true;
      this.error = null;

      try {
        // In a real app, this would be an API call to Strapi
        // const response = await $fetch(`/api/appointments/${id}`, {
        //   params: {
        //     'populate': '*'
        //   }
        // });
        
        // Simulate API response delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Use mock data for now
        const appointment = mockAppointments.find(a => a.reason.includes(id.toString()));
        
        if (appointment) {
          this.currentAppointment = appointment;
          return appointment;
        } else {
          throw new Error('Appointment not found');
        }
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch appointment';
        return null;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Create a new appointment
     * TASK_ID: APPT_003 - Create new appointment
     */
    async createAppointment(appointmentData: Partial<Appointment>) {
      this.loading = true;
      this.error = null;

      try {
        // In a real app, this would be an API call to Strapi
        // const response = await $fetch('/api/appointments', {
        //   method: 'POST',
        //   body: { data: appointmentData }
        // });
        
        // Simulate API response delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Create mock appointment
        const newAppointment: Appointment = {
          date: appointmentData.date || new Date().toISOString().split('T')[0],
          startTime: appointmentData.startTime || '09:00',
          endTime: appointmentData.endTime || '09:30',
          status: 'scheduled',
          reason: appointmentData.reason || 'Consultation',
          notes: appointmentData.notes || '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          doctor: appointmentData.doctor as Doctor,
        };
        
        // Add to local state
        this.appointments.push(newAppointment);
        
        return newAppointment;
      } catch (error: any) {
        this.error = error.message || 'Failed to create appointment';
        return null;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Update an existing appointment
     * TASK_ID: APPT_004 - Update appointment
     */
    async updateAppointment(id: number, appointmentData: Partial<Appointment>) {
      this.loading = true;
      this.error = null;

      try {
        // In a real app, this would be an API call to Strapi
        // const response = await $fetch(`/api/appointments/${id}`, {
        //   method: 'PUT',
        //   body: { data: appointmentData }
        // });
        
        // Simulate API response delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Update mock appointment
        const appointmentIndex = this.appointments.findIndex(a => a.reason.includes(id.toString()));
        
        if (appointmentIndex !== -1) {
          const updatedAppointment = {
            ...this.appointments[appointmentIndex],
            ...appointmentData,
            updatedAt: new Date().toISOString()
          };
          
          this.appointments[appointmentIndex] = updatedAppointment;
          
          if (this.currentAppointment?.reason.includes(id.toString())) {
            this.currentAppointment = updatedAppointment;
          }
          
          return updatedAppointment;
        } else {
          throw new Error('Appointment not found');
        }
      } catch (error: any) {
        this.error = error.message || 'Failed to update appointment';
        return null;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Cancel an appointment
     * TASK_ID: APPT_005 - Cancel appointment
     */
    async cancelAppointment(id: number) {
      return this.updateAppointment(id, { status: 'cancelled' });
    },
    
    /**
     * Filter appointments by various criteria
     * TASK_ID: APPT_006 - Filter appointments
     */
    filterAppointments(filters: {
      status?: string;
      doctor?: string;
      dateFrom?: string;
      dateTo?: string;
    }) {
      let filtered = [...this.appointments];
      
      if (filters.status) {
        filtered = filtered.filter(a => a.status === filters.status);
      }
      
      if (filters.doctor) {
        filtered = filtered.filter(a => 
          a.doctor && 
          (a.doctor.firstName + ' ' + a.doctor.lastName).toLowerCase().includes(filters.doctor!.toLowerCase())
        );
      }
      
      if (filters.dateFrom) {
        filtered = filtered.filter(a => a.date >= filters.dateFrom!);
      }
      
      if (filters.dateTo) {
        filtered = filtered.filter(a => a.date <= filters.dateTo!);
      }
      
      this.filteredAppointments = filtered;
      return filtered;
    }
  }
});