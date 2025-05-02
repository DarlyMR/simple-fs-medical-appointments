<template>
  <div>
    <NuxtLayout name="landing">
      <div class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container-narrow">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestro Equipo Médico
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Conozca a nuestros experimentados y dedicados profesionales de la salud
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardDoctor v-for="doctor in doctors" :key="doctor.id" :doctor="doctor" />
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import doctors from '~/assets/doctors.json'
useHead({
  title: 'Our Doctors'
});
</script>