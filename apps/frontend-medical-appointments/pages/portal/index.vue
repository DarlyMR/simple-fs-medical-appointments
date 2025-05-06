<template>
  <div>
    <NuxtLayout name="portal">
      <div v-if="loading" class="flex justify-center items-center h-64">
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary-600">
        </div>
      </div>

      <div v-else>
        <!-- Welcome Section -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h1 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Bienvenido/a, {{ authStore.userFullName }}
          </h1>
          <p class="text-gray-600 dark:text-gray-400">
            Administra tus próximas citas, historial médico, recetas y más.
          </p>
        </div>

        <!-- Stats / Quick Info -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <div>
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Próximas Citas</h2>
                <p class="text-2xl font-bold text-primary-600 dark:text-primary-400">{{ upcomingAppointmentsCount }}</p>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center text-secondary-600 dark:text-secondary-400 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
              </div>
              <div>
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Documentos Médicos</h2>
                <p class="text-2xl font-bold text-secondary-600 dark:text-secondary-400">5</p>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m11.35 3.836-.065.03-.065-.03a1.806 1.806 0 0 0-1.99.524c-.89 1.05-.676 2.075-.293 3.085.406 1.07 1.138 2.05 1.986 2.815a14.628 14.628 0 0 0 2.274 1.734c.256.168.52.332.79.49a12.46 12.46 0 0 0 .792-.49 14.586 14.586 0 0 0 2.273-1.734c.848-.766 1.58-1.744 1.985-2.815.383-1.01.597-2.035-.293-3.085a1.806 1.806 0 0 0-1.99-.524l-.065.03-.065-.03a1.807 1.807 0 0 0-1.99.524c-.407.48-.593 1.07-.593 1.69 0 .603.173 1.19.574 1.665.398.473.964.724 1.57.724s1.172-.25 1.57-.723c.401-.476.574-1.063.574-1.666 0-.62-.184-1.21-.592-1.69a1.807 1.807 0 0 0-1.99-.524Z" />
                </svg>
              </div>
              <div>
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Recetas</h2>
                <p class="text-2xl font-bold text-green-600 dark:text-green-400">3</p>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.671 1.09-.085 2.17-.207 3.238-.364 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </div>
              <div>
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Mensajes No Leídos</h2>
                <p class="text-2xl font-bold text-yellow-600 dark:text-yellow-400">2</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Upcoming Appointments -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Próximas Citas</h2>
            <NuxtLink to="/portal/appointments" class="text-primary-600 dark:text-primary-400 hover:underline text-sm">
              Ver todas
            </NuxtLink>
          </div>

          <div v-if="upcomingAppointments.length === 0" class="text-gray-500 dark:text-gray-400 text-center py-4">
            No hay próximas citas.
            <NuxtLink to="/portal/appointments/new" class="text-primary-600 dark:text-primary-400 hover:underline">
              Agendar una ahora
            </NuxtLink>
          </div>

          <div v-else class="space-y-4">
            <div v-for="appointment in upcomingAppointments.slice(0, 3)" :key="appointment.date + appointment.startTime"
              class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div
                    class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {{ formatDate(appointment.date, 'DD') }}
                  </div>
                </div>
                <div class="ml-4 flex-1">
                  <div class="flex justify-between">
                    <div>
                      <p class="font-semibold text-gray-900 dark:text-white">
                        {{ appointment.reason }}
                      </p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ formatDate(appointment.date, 'ddd, MMM D, YYYY') }} a las {{ formatTime(appointment.startTime)
                        }} - {{ formatTime(appointment.endTime) }}
                      </p>
                    </div>
                    <div class="badge-success">
                      {{ appointment.status }}
                    </div>
                  </div>
                  <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Con el Dr. {{ appointment.doctor?.firstName }} {{ appointment.doctor?.lastName }} ({{
                      appointment.doctor?.specialty }})
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="upcomingAppointments.length > 0" class="mt-4 flex justify-center">
            <NuxtLink to="/portal/appointments/new" class="btn-primary">
              Agendar Nueva Cita
            </NuxtLink>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Actividad Reciente</h2>

          <div class="space-y-4">
            <div class="border-l-4 border-green-500 pl-4">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ formatDate(new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), 'MMM D, YYYY') }}
              </p>
              <p class="font-medium text-gray-900 dark:text-white">Receta Renovada</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">El Dr. Smith renovó su medicamento para la presión
                arterial alta</p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ formatDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), 'MMM D, YYYY') }}
              </p>
              <p class="font-medium text-gray-900 dark:text-white">Resultados de Laboratorio Disponibles</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Sus resultados recientes de análisis de sangre ahora
                están disponibles</p>
            </div>

            <div class="border-l-4 border-yellow-500 pl-4">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ formatDate(new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), 'MMM D, YYYY') }}
              </p>
              <p class="font-medium text-gray-900 dark:text-white">Cita Completada</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Chequeo anual con el Dr. Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useAppointmentStore } from '~/stores/appointment';
import dayjs from '#build/dayjs.imports.mjs';

// Initialize stores
const authStore = useAuthStore();
const appointmentStore = useAppointmentStore();

// Loading state
const loading = ref(true);

// Computed properties
const upcomingAppointments = computed(() => appointmentStore.upcomingAppointments);
const upcomingAppointmentsCount = computed(() => upcomingAppointments.value.length);

// Format date using dayjs
const formatDate = (date: string, format: string) => {
  return dayjs(date).format(format);
};

// Format time for display
const formatTime = (time: string) => {
  // Assumes time is in 24-hour format like "14:30"
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${period}`;
};

// Initialize data on component mount
// TASK_ID: PORTAL_001 - Dashboard data initialization
onMounted(async () => {
  try {
    // Check if user is authenticated
    if (!authStore.isAuthenticated) {
      await authStore.init();

      if (!authStore.isAuthenticated) {
        // Redirect to login if not authenticated
        return navigateTo('/portal/login');
      }
    }

    // Fetch appointments for the dashboard
    await appointmentStore.fetchAppointments();
  } catch (error) {
    console.error('Error initializing dashboard:', error);
  } finally {
    loading.value = false;
  }
});

// Set the page title
useHead({
  title: 'Patient Dashboard'
});
</script>