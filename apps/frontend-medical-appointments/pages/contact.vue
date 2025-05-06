<template>
  <div>
    <NuxtLayout name="landing">
      <div class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container-narrow">
          <!-- Hero Section -->
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contáctanos
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros.
            </p>
          </div>

          <!-- Contact Form -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label for="name" class="form-label">Nombre completo</label>
                  <input id="name" v-model="form.name" type="text" required class="c-form-input" />
                </div>

                <div>
                  <label for="email" class="form-label">Correo electrónico</label>
                  <input id="email" v-model="form.email" type="email" required class="c-form-input" />
                </div>

                <div>
                  <label for="subject" class="form-label">Asunto</label>
                  <input id="subject" v-model="form.subject" type="text" required class="c-form-input" />
                </div>

                <div>
                  <label for="message" class="form-label">Mensaje</label>
                  <textarea id="message" v-model="form.message" rows="4" required class="c-form-input"></textarea>
                </div>

                <button type="submit" class="btn-primary w-full" :class="{ 'opacity-75 cursor-not-allowed': loading }"
                  :disabled="loading">
                  <span v-if="loading" class="mr-2">
                    <span
                      class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em]"></span>
                  </span>
                  {{ loading ? 'Enviando...' : 'Enviar mensaje' }}
                </button>
              </form>
            </div>

            <div class="space-y-8">
              <!-- Contact Information -->
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Información de contacto
                </h2>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-medium text-gray-900 dark:text-white">Dirección</h3>
                      <p class="text-gray-600 dark:text-gray-400">123 Main Street</p>
                      <p class="text-gray-600 dark:text-gray-400">Healthcare City, MD 12345</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-medium text-gray-900 dark:text-white">Teléfono</h3>
                      <p class="text-gray-600 dark:text-gray-400">(123) 456-7890</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                      <p class="text-gray-600 dark:text-gray-400">info@medicare.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Business Hours -->
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Horario de atención
                </h2>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Lunes - Viernes</span>
                    <span class="text-gray-900 dark:text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Sábado</span>
                    <span class="text-gray-900 dark:text-white">9:00 AM - 2:00 PM</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">Domingo</span>
                    <span class="text-gray-900 dark:text-white">Cerrado</span>
                  </div>
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
import { ref, reactive } from 'vue';

const loading = ref(false);

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const handleSubmit = async () => {
  loading.value = true;

  try {
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Resetear formulario
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';

    alert('Mensaje enviado correctamente');
  } catch (_) {
    alert('Error al enviar el mensaje');
  } finally {
    loading.value = false;
  }
};

useHead({
  title: 'Contacto'
});
</script>