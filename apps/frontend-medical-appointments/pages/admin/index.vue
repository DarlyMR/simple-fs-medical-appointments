<template>
    <div>
      <NuxtLayout name="admin">
        <div v-if="loading" class="flex justify-center items-center h-64">
          <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary-600"></div>
        </div>
  
        <div v-else>
          <!-- Welcome Section -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h1 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Panel de Administración
            </h1>
            <p class="text-gray-600 dark:text-gray-400">
              Gestiona citas, pacientes, doctores y operaciones de la clínica.
            </p>
          </div>
  
          <!-- Stats Overview -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Citas de Hoy</h2>
                  <p class="text-2xl font-bold text-primary-600 dark:text-primary-400">12</p>
                </div>
              </div>
            </div>
  
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <div>
                  <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Total de Pacientes</h2>
                  <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">753</p>
                </div>
              </div>
            </div>
  
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <div>
                  <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Doctores</h2>
                  <p class="text-2xl font-bold text-green-600 dark:text-green-400">18</p>
                </div>
              </div>
            </div>
  
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Aprobaciones Pendientes</h2>
                  <p class="text-2xl font-bold text-yellow-600 dark:text-yellow-400">5</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Recent Appointments & Actions -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Today's Appointments -->
            <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Citas de Hoy</h2>
                <NuxtLink to="/admin/appointments" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">
                  Ver todas
                </NuxtLink>
              </div>
  
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Hora
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Paciente
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Doctor
                      </th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Estado
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        09:00 AM
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900 dark:text-white">John Doe</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Chequeo General</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900 dark:text-white">Dr. Smith</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Medicina General</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Completada
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        10:30 AM
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900 dark:text-white">Jane Smith</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Seguimiento de Cardiología</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900 dark:text-white">Dr. Johnson</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Cardiología</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                          En Progreso
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        11:15 AM
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900 dark:text-white">Robert Williams</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Consulta de Dermatología</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900 dark:text-white">Dr. Garcia</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Dermatología</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Programada
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        02:00 PM
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900 dark:text-white">Mary Johnson</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Chequeo Pediátrico</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900 dark:text-white">Dr. Martinez</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Pediatría</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          Programada
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
  
            <!-- Quick Actions -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Acciones Rápidas</h2>
              
              <div class="space-y-3">
                <NuxtLink to="/admin/appointments/new" class="block w-full p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-center transition-colors">
                  Programar Cita
                </NuxtLink>
                
                <NuxtLink to="/admin/patients/new" class="block w-full p-3 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg text-center transition-colors">
                  Registrar Nuevo Paciente
                </NuxtLink>
                
                <NuxtLink to="/admin/doctors/schedule" class="block w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center transition-colors">
                  Gestionar Horario del Doctor
                </NuxtLink>
                
                <NuxtLink to="/admin/reports" class="block w-full p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-center transition-colors">
                  Generar Informes
                </NuxtLink>
              </div>
  
              <div class="mt-6">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">Notificaciones Recientes</h3>
                
                <div class="space-y-3">
                  <div class="p-3 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 rounded">
                    <p class="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                      Dr. Johnson solicitó un cambio de horario para el 15 de mayo
                    </p>
                    <p class="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                      Hace 15 minutos
                    </p>
                  </div>
                  
                  <div class="p-3 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 rounded">
                    <p class="text-sm font-medium text-red-800 dark:text-red-200">
                      Mantenimiento del sistema programado para el 10 de mayo a las 2:00 AM
                    </p>
                    <p class="text-xs text-red-700 dark:text-red-300 mt-1">
                      Hace 2 horas
                    </p>
                  </div>
                  
                  <div class="p-3 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 rounded">
                    <p class="text-sm font-medium text-green-800 dark:text-green-200">
                      Nueva función: Flujo de trabajo de renovación automática de recetas
                    </p>
                    <p class="text-xs text-green-700 dark:text-green-300 mt-1">
                      Ayer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtLayout>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useAdminStore } from '~/stores/admin';
  
  // Initialize admin store
  const adminStore = useAdminStore();
  
  // Loading state
  const loading = ref(true);
  
  // Initialize data on component mount
  // TASK_ID: ADMIN_004 - Admin dashboard initialization
  onMounted(async () => {
    try {
      // Check if admin is authenticated
      if (!adminStore.isAuthenticated) {
        await adminStore.init();
        
        if (!adminStore.isAuthenticated) {
          // Redirect to login if not authenticated
          return navigateTo('/admin/login');
        }
      }
      
      // Fetch data for the admin dashboard
      // In a real app, this would load actual data
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error('Error initializing admin dashboard:', error);
    } finally {
      loading.value = false;
    }
  });
  
  // Set the page title
  useHead({
    title: 'Panel de Administración'
  });
  </script>