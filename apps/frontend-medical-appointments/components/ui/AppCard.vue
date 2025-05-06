<template>
  <div :class="['rounded-lg shadow-md overflow-hidden', {'bg-white dark:bg-gray-800': !transparent}]">
    <div v-if="$slots.header" :class="['px-6 py-4 border-b border-gray-200 dark:border-gray-700', headerClass]">
      <slot name="header" />
    </div>
    <div :class="['px-6 py-4', bodyClass]">
      <slot />
    </div>
    <div v-if="$slots.footer" :class="['px-6 py-4 border-t border-gray-200 dark:border-gray-700', footerClass]">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  transparent: {
    type: Boolean,
    default: false
  },
  headerClass: {
    type: String,
    default: ''
  },
  bodyClass: {
    type: String,
    default: ''
  },
  footerClass: {
    type: String,
    default: ''
  }
});
</script>