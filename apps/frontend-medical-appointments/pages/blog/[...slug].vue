<template>
  <div>
    <NuxtLayout name="landing">
      <div class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container-narrow">
          <ContentDoc v-slot="{ doc }">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img :src="doc.image" :alt="doc.title" class="w-full h-64 object-cover">
              <div class="p-8">
                <div class="flex items-center mb-4">
                  <span class="text-sm text-gray-500 dark:text-gray-400">{{ formatDate(doc.date) }}</span>
                  <span class="mx-2 text-gray-500 dark:text-gray-400">•</span>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Por {{ doc.author }}</span>
                </div>
                
                <div class="prose dark:prose-invert max-w-none">
                  <ContentRenderer :value="doc" />
                </div>

                <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in doc.tags" :key="tag" 
                          class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                      #{{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ContentDoc>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

useHead({
  title: 'Artículo del Blog'
});
</script>