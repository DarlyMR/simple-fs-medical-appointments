<template>
  <div class="text-center">
    <img :src="doctor.image" :alt="doctor.name" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ doctor.name }}</h3>
    <p class="text-gray-600 dark:text-gray-400">{{ doctor.title }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  doctor: {
    type: Object,
    required: true
  }
})
</script>
