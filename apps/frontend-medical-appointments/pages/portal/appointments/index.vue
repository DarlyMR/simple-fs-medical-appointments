<template>
  <div>
    <NuxtLayout name="portal">
      <!-- Header -->
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Mis Citas</h1>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Gestiona tus citas médicas
          </p>
        </div>
        <button @click="openAppointmentModal" class="btn-primary">
          Nueva Cita
        </button>
      </div>

      <!-- Filters -->
      <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label for="status" class="form-label">Estado</label>
          <select id="status" v-model="filters.status" class="c-form-input">
            <option value="">Todos</option>
            <option value="scheduled">Programadas</option>
            <option value="completed">Completadas</option>
            <option value="cancelled">Canceladas</option>
          </select>
        </div>

        <div>
          <label for="doctor" class="form-label">Doctor</label>
          <select id="doctor" v-model="filters.doctor" class="c-form-input">
            <option value="">Todos</option>
            <option v-for="doctor in doctors" :key="doctor.id" :value="doctor.id">
              Dr. {{ doctor.firstName }} {{ doctor.lastName }}
            </option>
          </select>
        </div>

        <div>
          <label for="dateFrom" class="form-label">Desde</label>
          <input type="date" id="dateFrom" v-model="filters.dateFrom" class="c-form-input" />
        </div>

        <div>
          <label for="dateTo" class="form-label">Hasta</label>
          <input type="date" id="dateTo" v-model="filters.dateTo" class="c-form-input" />
        </div>
      </div>

      <!-- Appointments List -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Fecha y Hora
                </th>
                <th scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Doctor
                </th>
                <th scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Motivo
                </th>
                <th scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Estado
                </th>
                <th scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="appointment in filteredAppointments" :key="appointment.id"
                class="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ formatDate(appointment.date) }}
                  </div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    {{ appointment.startTime }} - {{ appointment.endTime }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900 dark:text-white">
                    Dr. {{ appointment.doctor?.firstName }} {{ appointment.doctor?.lastName }}
                  </div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    {{ appointment.doctor?.specialty }}
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-gray-900 dark:text-white">{{ appointment.reason }}</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400" v-if="appointment.notes">
                    {{ appointment.notes }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="[
                    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                    {
                      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': appointment.status === 'completed',
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': appointment.status === 'scheduled',
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': appointment.status === 'cancelled'
                    }
                  ]">
                    {{ getStatusText(appointment.status) }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button class="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300
                  mr-3" @click="editAppointment(appointment)">

                    Editar
                  </button>
                  <button v-if="appointment.status === 'scheduled'" @click="cancelAppointment(appointment)"
                    class="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                    Cancelar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Appointment Modal -->
      <AppointmentModal :is-open="showAppointmentModal" :appointment="selectedAppointment"
        @close="closeAppointmentModal" @submit="handleAppointmentSubmit" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { useAppointmentStore } from '~/stores/appointment';
import type { Appointment, Doctor } from '~/types/models';

// Initialize stores
const appointmentStore = useAppointmentStore();

// State
const showAppointmentModal = ref(false);
const selectedAppointment = ref<Appointment | null>(null);
const loading = ref(true);

const filters = reactive({
  status: '',
  doctor: '',
  dateFrom: '',
  dateTo: ''
});

// Fetch appointments
onMounted(async () => {
  try {
    await appointmentStore.fetchAppointments();
  } catch (error) {
    console.error('Error fetching appointments:', error);
  } finally {
    loading.value = false;
  }
});

// Computed
const filteredAppointments = computed(() => {
  return appointmentStore.appointments.filter(appointment => {
    if (filters.status && appointment.status !== filters.status) return false;
    if (filters.doctor && appointment.doctor?.id !== filters.doctor) return false;
    if (filters.dateFrom && appointment.date < filters.dateFrom) return false;
    if (filters.dateTo && appointment.date > filters.dateTo) return false;
    return true;
  });
});

// Methods
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const getStatusText = (status: string) => {
  const statusMap: { [key: string]: string } = {
    scheduled: 'Programada',
    completed: 'Completada',
    cancelled: 'Cancelada',
    'no-show': 'No asistió'
  };
  return statusMap[status] || status;
};

const openAppointmentModal = () => {
  selectedAppointment.value = null;
  showAppointmentModal.value = true;
};

const closeAppointmentModal = () => {
  showAppointmentModal.value = false;
  selectedAppointment.value = null;
};

const editAppointment = (appointment: Appointment) => {
  selectedAppointment.value = appointment;
  showAppointmentModal.value = true;
};

const cancelAppointment = async (appointment: Appointment) => {
  if (confirm('¿Estás seguro de que deseas cancelar esta cita?')) {
    try {
      await appointmentStore.cancelAppointment(appointment.id);
    } catch (error) {
      console.error('Error cancelling appointment:', error);
    }
  }
};

const handleAppointmentSubmit = async (appointmentData: any) => {
  try {
    if (appointmentData.id) {
      await appointmentStore.updateAppointment(appointmentData.id, appointmentData);
    } else {
      await appointmentStore.createAppointment(appointmentData);
    }
  } catch (error) {
    console.error('Error saving appointment:', error);
  }
};

// Set page title
useHead({
  title: 'Mis Citas'
});



const doctors: Array<Doctor> = [];
</script>