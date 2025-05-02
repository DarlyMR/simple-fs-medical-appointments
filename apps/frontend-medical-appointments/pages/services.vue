<template>
  <div>
    <NuxtLayout name="landing">
      <div class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container-narrow">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestros Servicios Médicos
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Servicios integrales de atención médica adaptados a sus necesidades
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardService v-for="service in services" :key="service.name" :service="service" />
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import services from '~/assets/services.json';
import CardService from '~/components/CardService.vue';

useHead({
  title: 'Nuestros Servicios'
});
</script>