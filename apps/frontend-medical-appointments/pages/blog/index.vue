<template>
  <div>
    <NuxtLayout name="landing">
      <div class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container-narrow">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Blog Médico
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Artículos y consejos de salud de nuestros expertos
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- <ContentList v-slot="{ list }" path="/blog">
              <article v-for="article in list" :key="article._path"
                class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover">
                <div class="p-6">
                  <div class="flex items-center mb-2">
                    <span class="text-sm text-gray-500 dark:text-gray-400">{{ formatDate(article.date) }}</span>
                  </div>
                  <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {{ article.title }}
                  </h2>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">
                    {{ article.description }}
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <span class="text-sm text-gray-500 dark:text-gray-400">Por {{ article.author }}</span>
                    </div>
                    <NuxtLink :to="article._path" class="text-primary-600 dark:text-primary-400 hover:underline">
                      Leer más
                    </NuxtLink>
                  </div>
                </div>
              </article>
            </ContentList> -->
          </div>
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
  title: 'Blog Médico'
});
</script>