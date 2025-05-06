// Base interface for Strapi responses
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiArrayResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Strapi attributes wrapper
export interface StrapiData<T> {
  id: number;
  attributes: T;
}

// User interfaces
export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Patient {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  gender: "male" | "female" | "other";
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  insuranceProvider?: string;
  insuranceNumber?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
  medicalHistory?: string;
  allergies?: string;
  createdAt: string;
  updatedAt: string;
  user?: User;
  appointments?: Appointment[];
}

export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialty: string;
  education: string;
  experience: string;
  licenseNumber: string;
  bio: string;
  isActive: boolean;
  workingDays: string[];
  workingHours: {
    start: string;
    end: string;
  };
  createdAt: string;
  updatedAt: string;
  appointments?: Appointment[];
  schedules?: Schedule[];
  user?: User;
}

export interface Specialty {
  name: string;
  description: string;
  icon?: string;
  createdAt: string;
  updatedAt: string;
  doctors?: Doctor[];
}

export interface Appointment {
  date: string;
  startTime: string;
  endTime: string;
  status: "scheduled" | "completed" | "cancelled" | "no-show";
  notes?: string;
  reason: string;
  createdAt: string;
  updatedAt: string;
  patient?: Patient;
  doctor?: Doctor;
}

export interface Schedule {
  date: string;
  isAvailable: boolean;
  timeSlots: {
    start: string;
    end: string;
    isBooked: boolean;
  }[];
  createdAt: string;
  updatedAt: string;
  doctor?: Doctor;
}

export interface MedicalRecord {
  date: string;
  diagnosis: string;
  treatment: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
  patient?: Patient;
  doctor?: Doctor;
  appointment?: Appointment;
}

export interface Prescription {
  medication: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate: string;
  instructions: string;
  createdAt: string;
  updatedAt: string;
  patient?: Patient;
  doctor?: Doctor;
}

export interface Message {
  subject: string;
  content: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
  sender: User;
  recipient: User;
}
