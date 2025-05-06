<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
          Inicia sesión en tu cuenta
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Accede a tu portal de pacientes y gestiona tus citas
        </p>
      </div>

      <form class="space-y-6" @submit.prevent="handleLogin">
        <div v-if="error"
          class="bg-red-50 dark:bg-red-900/30 p-4 rounded-md text-red-700 dark:text-red-300 text-sm mb-4">
          {{ error }}
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Dirección de correo electrónico
          </label>
          <div class="mt-1">
            <input id="email" v-model="email" name="email" type="email" autocomplete="email" required
              class="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Contraseña
          </label>
          <div class="mt-1">
            <input id="password" name="password" type="password" autocomplete="current-password" required
              v-model="password"
              class="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" v-model="rememberMe"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Recuérdame
            </label>
          </div>

          <div class="text-sm">
            <NuxtLink to="/portal/forgot-password"
              class="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400">
              ¿Olvidaste tu contraseña?
            </NuxtLink>
          </div>
        </div>

        <div>
          <button type="submit" class="w-full btn-primary py-2" :class="{ 'opacity-75 cursor-not-allowed': loading }"
            :disabled="loading">
            <span v-if="loading" class="mr-2">
              <span
                class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em]"></span>
            </span>
            {{ loading ? 'Iniciando sesión...' : 'Iniciar sesión' }}
          </button>
        </div>
      </form>

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              O
            </span>
          </div>
        </div>

        <div class="mt-6">
          <p class="text-center text-sm text-gray-600 dark:text-gray-400">
            ¿No tienes una cuenta?
            <NuxtLink to="/portal/register"
              class="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400">
              Regístrate ahora
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';

// Define reactive variables
const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const loading = ref(false);
const error = ref('');

// Initialize auth store
const authStore = useAuthStore();

// For testing purposes, prefill with demo credentials
if (import.meta.dev) {
  email.value = 'john.doe@example.com';
  password.value = 'password';
}

// Handle login form submission
// TASK_ID: AUTH_001 - User login functionality
const handleLogin = async () => {
  // Basic form validation
  if (!email.value || !password.value) {
    error.value = 'Por favor, introduce tu correo electrónico y contraseña';
    return;
  }

  loading.value = true;
  error.value = '';

  try {
    const success = await authStore.login(email.value, password.value);

    if (success) {
      // Redirect to portal dashboard
      navigateTo('/portal');
    } else {
      error.value = authStore.error || 'Error al iniciar sesión. Por favor, comprueba tus credenciales.';
    }
  } catch (err: any) {
    error.value = err.message || 'Ha ocurrido un error inesperado';
  } finally {
    loading.value = false;
  }
};

// Set the page title
useHead({
  title: 'Inicio de sesión del paciente'
});
</script>