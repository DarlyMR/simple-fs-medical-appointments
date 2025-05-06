<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/" class="text-primary-600 font-bold text-xl font-heading">
                MedicTest
              </NuxtLink>
            </div>
            <nav class="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
              <NuxtLink to="/" class="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium" exact-active-class="text-primary-600 dark:text-primary-400">
                Inicio
              </NuxtLink>
              <NuxtLink to="/services" class="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium" exact-active-class="text-primary-600 dark:text-primary-400">
                Servicios
              </NuxtLink>
              <NuxtLink to="/doctors" class="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium" exact-active-class="text-primary-600 dark:text-primary-400">
                Doctores
              </NuxtLink>
              <NuxtLink to="/about" class="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium" exact-active-class="text-primary-600 dark:text-primary-400">
                Sobre nosotros
              </NuxtLink>
              <NuxtLink to="/blog" class="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium" exact-active-class="text-primary-600 dark:text-primary-400">
                Blog
              </NuxtLink>
              <NuxtLink to="/contact" class="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium" exact-active-class="text-primary-600 dark:text-primary-400">
                Contacto
              </NuxtLink>
            </nav>
          </div>
          <div class="flex items-center">
            <NuxtLink to="/portal/login" class="btn-outline text-sm ml-3">
              Portal pacientes
            </NuxtLink>
            <NuxtLink to="/portal/register" class="btn-primary text-sm ml-3">
              Registro
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-800 shadow-inner">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">MedicTest</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              Proporcionar servicios de salud de calidad con un enfoque centrado en el paciente.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Enlaces rápidos</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm">Inicio</NuxtLink></li>
              <li><NuxtLink to="/services" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm">Servicios</NuxtLink></li>
              <li><NuxtLink to="/doctors" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm">Doctores</NuxtLink></li>
              <li><NuxtLink to="/about" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm">Sobre</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm">Contacto</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contacto</h3>
            <address class="not-italic">
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">123 Main Street</p>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">Healthcare City, MD 12345</p>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">Phone: (123) 456-7890</p>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Email: info@medictest.com</p>
            </address>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p class="text-center text-gray-500 dark:text-gray-400 text-sm">
            &copy; {{ new Date().getFullYear() }} MedicTest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>