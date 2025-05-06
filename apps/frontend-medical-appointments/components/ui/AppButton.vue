<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
      sizeClasses,
      variantClasses,
      { 'opacity-50 cursor-not-allowed': disabled },
      className
    ]"
    :type="type"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="mr-2">
      <span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em]"></span>
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'outline', 'text'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
});

defineEmits(['click']);

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'px-3 py-1.5 text-xs';
    case 'lg': return 'px-6 py-3 text-base';
    default: return 'px-4 py-2 text-sm';
  }
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500';
    case 'secondary':
      return 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500';
    case 'outline':
      return 'bg-transparent border border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400 dark:border-gray-600';
    case 'text':
      return 'bg-transparent text-primary-600 hover:text-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900 focus:ring-primary-500';
    default:
      return 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500';
  }
});
</script>