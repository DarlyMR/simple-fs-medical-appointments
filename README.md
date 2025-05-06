# Aplicación de Citas Médicas Full-Stack

Una aplicación completa full-stack para la gestión de citas médicas, que incluye un frontend en Nuxt.js y un backend en Strapi.

## ✨ Características Principales

-   **Gestión de Citas:** Programa, visualiza y gestiona citas médicas de manera eficiente.
-   **Autenticación de Usuarios:** Cuentas de usuario seguras y control de acceso basado en roles.
-   **Perfiles de Doctores y Pacientes:** Perfiles detallados para doctores y pacientes, incluyendo información médica relevante.
-   **Gestión de Horarios:** Los doctores pueden definir su disponibilidad y los pacientes pueden reservar citas según los horarios disponibles.
-   **Historiales Médicos:** Almacena y gestiona de forma segura los historiales médicos de los pacientes.
-   **Recetas:** Crea y gestiona recetas para pacientes.
-   **Mensajería:** Sistema de mensajería seguro para la comunicación entre doctores y pacientes.

## 🚀 Empezando

### Requisitos

-   Node.js (v18 o posterior)
-   npm o yarn
-   PostgreSQL

### Instalación

1.  Clona el repositorio:

    ```bash
    git clone <repository-url>
    cd simple-fs-medical-appointments
    ```

### Configuración del Backend (Strapi)

1.  Navega al backend de Strapi:

    ```bash
    cd apps/strapi-medical-appointments
    ```

2.  Instala las dependencias:

    ```bash
    npm install # o yarn install
    ```

3.  Inicia el servidor de desarrollo:

    ```bash
    npm run develop # o yarn develop
    ```

    Consulta la [documentación de Strapi](https://docs.strapi.io) para opciones avanzadas de configuración y despliegue.

### Configuración del Frontend (Nuxt.js)

1.  Navega al frontend de Nuxt.js:

    ```bash
    cd apps/frontend-medical-appointments
    ```

2.  Instala las dependencias:

    ```bash
    npm install # o yarn install
    ```

3.  Inicia el servidor de desarrollo:

    ```bash
    npm run dev # o yarn dev
    ```

    El frontend estará accesible en `http://localhost:3000`. Consulta la [documentación de Nuxt.js](https://nuxt.com/docs/getting-started/introduction) para más información.