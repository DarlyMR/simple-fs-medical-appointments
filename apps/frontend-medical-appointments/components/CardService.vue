<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
      <img :src="`/assets/svg/${service.icon}`" :alt="service.name" class="w-6 h-6" />
    </div>
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ service.name }}</h3>
    <p class="text-gray-600 dark:text-gray-400">{{ service.description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  service: {
    type: Object,
    required: true
  }
});
</script>
