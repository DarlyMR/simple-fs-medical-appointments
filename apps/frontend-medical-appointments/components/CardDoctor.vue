<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <img :src="doctor.image"
         :alt="doctor.name"
         class="w-full h-64 object-cover" />
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ doctor.name }}</h3>
      <p class="text-primary-600 dark:text-primary-400 font-medium mb-2">{{ doctor.specialty }}</p>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        {{ doctor.description }}
      </p>
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-500 dark:text-gray-400">Disponible: {{ doctor.availability }}</span>
        <NuxtLink to="/portal/appointments" class="text-primary-600 dark:text-primary-400 hover:underline">
          Reservar Cita
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  doctor: {
    type: Object,
    required: true
  }
})
</script>
