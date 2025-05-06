<template>
  <div class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/portal" class="text-primary-600 font-bold text-xl font-heading">
                Portal Medictest
              </NuxtLink>
            </div>
          </div>
          <div class="flex items-center">
            <div class="relative ml-3" v-if="isAuthenticated">
              <button @click="userMenuOpen = !userMenuOpen"
                class="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <span class="mr-2 text-gray-700 dark:text-gray-300">{{ user?.firstName || 'Usuario' }}</span>
                <div class="h-8 w-8 rounded-full bg-primary-200 flex items-center justify-center text-primary-700">
                  {{ user?.firstName ? user.firstName[0] : 'U' }}
                </div>
              </button>

              <div v-if="userMenuOpen"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <NuxtLink to="/portal/profile"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Tu perfil</NuxtLink>
                <NuxtLink to="/portal/settings"
                  class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Configuración</NuxtLink>
                <button @click="logout"
                  class="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Cerrar sesión</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="flex-grow flex">
      <!-- Sidebar -->
      <aside class="hidden md:block w-64 bg-white dark:bg-gray-800 shadow-md" v-if="isAuthenticated">
        <div class="h-full px-3 py-4 overflow-y-auto">
          <ul class="space-y-2 font-medium">
            <li v-for="item in sidebarItems" :key="item.path">
              <NuxtLink :to="item.path"
                class="flex items-center p-2 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
                exact-active-class="bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                <span class="ml-3">{{ item.title }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </aside>

      <!-- Main content -->
      <main class="flex-grow p-4 sm:p-6 lg:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
const userMenuOpen = ref(false);
const isAuthenticated = computed(() => authStore.isAuthenticated);
const user = computed(() => authStore.user);

function logout() {
  authStore.logout();
  navigateTo('/portal/login');
  userMenuOpen.value = false;
}

onMounted(() => {
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (userMenuOpen.value && !(e.target as Element).closest('.relative')) {
      userMenuOpen.value = false;
    }
  });
});

const sidebarItems = [
  { title: 'Panel de control', path: '/portal' },
  { title: 'Citas', path: '/portal/appointments' },
  { title: 'Historial médico', path: '/portal/medical-history' },
  { title: 'Mensajes', path: '/portal/messages' },
  { title: 'Recetas', path: '/portal/prescriptions' },
  { title: 'Perfil', path: '/portal/profile' },
];

</script>