<template>
    <div>
      <NuxtLayout name="landing">
        <!-- Hero section -->
        <section class="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="md:flex md:items-center md:justify-between">
              <div class="md:w-1/2 mb-10 md:mb-0">
                <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Quality Healthcare When You Need It Most
                </h1>
                <p class="text-xl mb-8 text-primary-100">
                  Book appointments with top doctors, manage your health records, and get personalized care from the comfort of your home.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <NuxtLink to="/portal/register" class="btn inline-block py-3 px-6 rounded-lg bg-white text-primary-700 font-semibold shadow-lg hover:bg-primary-50 transition-colors">
                    Register Now
                  </NuxtLink>
                  <NuxtLink to="/contact" class="btn inline-block py-3 px-6 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
                    Contact Us
                  </NuxtLink>
                </div>
              </div>
              <div class="md:w-1/2">
                <img src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                     alt="Doctor with patient" 
                     class="w-full h-auto rounded-xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>
  
        <!-- Features section -->
        <section class="py-16 bg-white dark:bg-gray-900">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                Our Services
              </h2>
              <p class="mt-4 text-xl text-gray-600 dark:text-gray-400">
                Comprehensive healthcare services to meet your needs
              </p>
            </div>
  
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Feature 1 -->
              <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Easy Appointment Scheduling
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Book appointments with your preferred doctors in just a few clicks. Choose from available time slots that fit your schedule.
                </p>
              </div>
  
              <!-- Feature 2 -->
              <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Top Medical Specialists
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Access a network of qualified medical specialists across various healthcare fields, each with years of experience.
                </p>
              </div>
  
              <!-- Feature 3 -->
              <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Medical Records Management
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Securely store and access your medical history, prescriptions, and test results in one centralized location.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Specialties section -->
        <section class="py-16 bg-gray-100 dark:bg-gray-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                Our Medical Specialties
              </h2>
              <p class="mt-4 text-xl text-gray-600 dark:text-gray-400">
                Expert care for all your health needs
              </p>
            </div>
  
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              <!-- Specialty 1 -->
              <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div class="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Cardiology</h3>
              </div>
  
              <!-- Specialty 2 -->
              <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div class="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Neurology</h3>
              </div>
  
              <!-- Specialty 3 -->
              <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div class="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Pediatrics</h3>
              </div>
  
              <!-- Specialty 4 -->
              <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div class="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Orthopedics</h3>
              </div>
  
              <!-- Specialty 5 -->
              <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div class="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Ophthalmology</h3>
              </div>
  
              <!-- Specialty 6 -->
              <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div class="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 1 1 4 0v12m-4 0h4m-4 0h4m-8 0V6a2 2 0 1 0-4 0v12m4 0H4m4 0h4" />
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Dermatology</h3>
              </div>
  
              <!-- Specialty 7 -->
              <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div class="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.83 2.83m-2.83-2.83a39.25 39.25 0 0 0-10.5 0m10.5 0a39.25 39.25 0 0 0-10.5 0m10.5 0-2.83 2.83m-6.34 9.17V15a2.25 2.25 0 1 1 4.5 0v2.25" />
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">ENT Specialists</h3>
              </div>
  
              <!-- Specialty 8 -->
              <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div class="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">General Medicine</h3>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Testimonials section -->
        <section class="py-16 bg-white dark:bg-gray-900">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                What Our Patients Say
              </h2>
              <p class="mt-4 text-xl text-gray-600 dark:text-gray-400">
                Read testimonials from our satisfied patients
              </p>
            </div>
  
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Testimonial 1 -->
              <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
                <div class="flex items-center mb-4">
                  <div class="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <span class="text-lg font-semibold">M</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-900 dark:text-white">Maria Johnson</h4>
                  </div>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  "The online appointment system is so convenient. I was able to book my appointment and manage my medical records without any hassle. The doctors are professional and caring."
                </p>
                <div class="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
  
              <!-- Testimonial 2 -->
              <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
                <div class="flex items-center mb-4">
                  <div class="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <span class="text-lg font-semibold">T</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-900 dark:text-white">Thomas Rivera</h4>
                  </div>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  "I've been using MediCare for my family's healthcare needs for the past year, and the service has been exceptional. The appointment reminders and easy rescheduling options are very helpful."
                </p>
                <div class="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
  
              <!-- Testimonial 3 -->
              <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
                <div class="flex items-center mb-4">
                  <div class="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <span class="text-lg font-semibold">S</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-900 dark:text-white">Sarah Adams</h4>
                  </div>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-4">
                  "The doctors at MediCare are knowledgeable and take time to listen to my concerns. The portal makes it easy to access my medical history and communicate with my healthcare providers."
                </p>
                <div class="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- CTA section -->
        <section class="py-16 bg-primary-800 text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p class="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of patients who trust MediCare for their healthcare needs. Register today for easy appointment scheduling and access to top medical professionals.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/portal/register" class="btn inline-block py-3 px-6 rounded-lg bg-white text-primary-700 font-semibold shadow-lg hover:bg-primary-50 transition-colors">
                Register Now
              </NuxtLink>
              <NuxtLink to="/contact" class="btn inline-block py-3 px-6 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </NuxtLink>
            </div>
          </div>
        </section>
      </NuxtLayout>
    </div>
  </template>
  
  <script setup lang="ts">
  // Set the page title
  useHead({
    title: 'Home'
  });
  </script>