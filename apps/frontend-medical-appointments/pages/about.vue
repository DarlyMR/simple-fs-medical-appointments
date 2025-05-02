<template>
  <div>
    <NuxtLayout name="landing">
      <div class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="container-narrow">
          <!-- Hero Section -->
          <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Acerca de MedicTest
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Proporcionando servicios de salud de calidad con un enfoque centrado en el paciente desde 2010
            </p>
          </div>

          <!-- Mission & Vision -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Nuestra Misión</h2>
              <p class="text-gray-600 dark:text-gray-400">
                Proporcionar servicios de salud accesibles y de alta calidad que mejoren la salud y el bienestar de nuestra comunidad a través de la atención compasiva, la tecnología innovadora y las prácticas basadas en la evidencia.
              </p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Nuestra Visión</h2>
              <p class="text-gray-600 dark:text-gray-400">
                Ser el proveedor de atención médica líder conocido por la excelencia en la atención al paciente, la innovación médica y el bienestar de la comunidad, estableciendo el estándar para la prestación de atención médica en nuestra región.
              </p>
            </div>
          </div>

          <!-- Values -->
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Nuestros Valores</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Excelencia</h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Nos esforzamos por la excelencia en todo lo que hacemos, desde la atención al paciente hasta los procedimientos médicos y los procesos administrativos.
                </p>
              </div>

              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Compasión</h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Tratamos a cada paciente con empatía, comprensión y respeto, asegurando que se sientan valorados y atendidos.
                </p>
              </div>

              <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Innovación</h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Adoptamos nuevas tecnologías y métodos para proporcionar la mejor atención posible y opciones de tratamiento.
                </p>
              </div>
            </div>
          </div>

          <!-- Statistics -->
          <div class="bg-primary-600 rounded-lg shadow-xl p-8 mb-16">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div class="text-center">
                <div class="text-4xl font-bold text-white mb-2">15+</div>
                <div class="text-primary-100">Años de Servicio</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-white mb-2">50+</div>
                <div class="text-primary-100">Especialistas Médicos</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-white mb-2">10k+</div>
                <div class="text-primary-100">Pacientes Atendidos</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-white mb-2">98%</div>
                <div class="text-primary-100">Satisfacción del Paciente</div>
              </div>
            </div>
          </div>

          <!-- Team -->
          <div class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Equipo de Liderazgo</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ItemDoctor v-for="doctor in team" :key="doctor.name" :doctor="doctor" />
            </div>
          </div>

          <!-- CTA -->
          <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Únase a Nuestra Familia de Atención Médica</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Experimente la diferencia de la atención centrada en el paciente con nuestro dedicado equipo de profesionales de la salud.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/portal/register" class="btn-primary">
                Regístrese Ahora
              </NuxtLink>
              <NuxtLink to="/contact" class="btn-outline">
                Contáctenos
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import team from '~/assets/team.json'
import ItemDoctor from '~/components/ItemDoctor.vue'

useHead({
  title: 'About Us'
});
</script>