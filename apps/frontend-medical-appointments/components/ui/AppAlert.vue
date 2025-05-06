<template>
  <div
    :class="[
      'rounded-lg p-4 mb-4',
      variantClasses,
      className
    ]"
    role="alert"
  >
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <div :class="iconClasses">
          <slot name="icon"></slot>
        </div>
      </div>
      <div class="ml-3">
        <h3 :class="titleClasses" v-if="title">{{ title }}</h3>
        <div :class="messageClasses">
          <slot></slot>
        </div>
      </div>
      <div class="ml-auto pl-3" v-if="dismissible">
        <div class="-mx-1.5 -my-1.5">
          <button
            @click="$emit('dismiss')"
            :class="[
              'inline-flex rounded-md p-1.5',
              dismissButtonClasses
            ]"
          >
            <span class="sr-only">Dismiss</span>
            <!-- X icon -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    default: 'info',
    validator: (value: string) => ['info', 'success', 'warning', 'error'].includes(value)
  },
  title: {
    type: String,
    default: ''
  },
  dismissible: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
});

defineEmits(['dismiss']);

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'info':
      return 'bg-blue-50 dark:bg-blue-900/30';
    case 'success':
      return 'bg-green-50 dark:bg-green-900/30';
    case 'warning':
      return 'bg-yellow-50 dark:bg-yellow-900/30';
    case 'error':
      return 'bg-red-50 dark:bg-red-900/30';
    default:
      return 'bg-blue-50 dark:bg-blue-900/30';
  }
});

const iconClasses = computed(() => {
  switch (props.variant) {
    case 'info':
      return 'text-blue-500 dark:text-blue-400';
    case 'success':
      return 'text-green-500 dark:text-green-400';
    case 'warning':
      return 'text-yellow-500 dark:text-yellow-400';
    case 'error':
      return 'text-red-500 dark:text-red-400';
    default:
      return 'text-blue-500 dark:text-blue-400';
  }
});

const titleClasses = computed(() => {
  switch (props.variant) {
    case 'info':
      return 'text-sm font-medium text-blue-800 dark:text-blue-300';
    case 'success':
      return 'text-sm font-medium text-green-800 dark:text-green-300';
    case 'warning':
      return 'text-sm font-medium text-yellow-800 dark:text-yellow-300';
    case 'error':
      return 'text-sm font-medium text-red-800 dark:text-red-300';
    default:
      return 'text-sm font-medium text-blue-800 dark:text-blue-300';
  }
});

const messageClasses = computed(() => {
  switch (props.variant) {
    case 'info':
      return 'text-sm text-blue-700 dark:text-blue-200';
    case 'success':
      return 'text-sm text-green-700 dark:text-green-200';
    case 'warning':
      return 'text-sm text-yellow-700 dark:text-yellow-200';
    case 'error':
      return 'text-sm text-red-700 dark:text-red-200';
    default:
      return 'text-sm text-blue-700 dark:text-blue-200';
  }
});

const dismissButtonClasses = computed(() => {
  switch (props.variant) {
    case 'info':
      return 'bg-blue-50 text-blue-500 hover:bg-blue-100 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60';
    case 'success':
      return 'bg-green-50 text-green-500 hover:bg-green-100 dark:bg-green-900/40 dark:text-green-300 dark:hover:bg-green-900/60';
    case 'warning':
      return 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 dark:bg-yellow-900/40 dark:text-yellow-300 dark:hover:bg-yellow-900/60';
    case 'error':
      return 'bg-red-50 text-red-500 hover:bg-red-100 dark:bg-red-900/40 dark:text-red-300 dark:hover:bg-red-900/60';
    default:
      return 'bg-blue-50 text-blue-500 hover:bg-blue-100 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/60';
  }
});
</script>