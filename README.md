# 📚 Sistema de Gestión de Estudiantes – Prueba Técnica

Este proyecto es una **aplicación web desarrollada en React** como parte de una **prueba técnica**, cuyo objetivo es demostrar el manejo de autenticación, navegación protegida, consumo de APIs y carga masiva de datos mediante archivos CSV.

La aplicación permite **autenticarse**, **listar estudiantes** y **registrar múltiples estudiantes a la vez** mediante la carga de un archivo CSV.

---

## 🚀 Tecnologías utilizadas

- **React** + **TypeScript**
- **Vite** (entorno de desarrollo)
- **React Router DOM** (navegación y rutas protegidas)
- **Zustand** (manejo de estado global y autenticación)
- **Axios** (consumo de API REST)
- **Ant Design** (componentes UI)
- **Tailwind CSS** (estilos y layout)
- **React Query (@tanstack/react-query)** (manejo de mutaciones y estados de carga)

---

## 🔐 Funcionalidades principales

### Autenticación
- Inicio de sesión con persistencia de sesión.
- Protección de rutas mediante **guards**.
- Redirección automática al login cuando no existe sesión activa.
- Cierre de sesión con limpieza del estado global.

### Gestión de estudiantes
- Listado de estudiantes.
- Carga masiva de estudiantes mediante archivo **CSV**.
- Validación del archivo antes de enviarlo al backend.
- Mensajes de éxito y error al procesar el archivo.

### Carga de archivo CSV
- Subida de uno o varios estudiantes en un solo archivo.
- Descarga de un archivo CSV de ejemplo.
- El sistema requiere que el campo **NUE sea único por estudiante**.

---

## 🧠 Manejo de estado (Zustand)

El estado de autenticación se gestiona con **Zustand**, utilizando `persist` para mantener la sesión activa incluso después de recargar la página.

Datos manejados:
- Token de autenticación

---

## 📄 Archivo CSV

En el modulo para registrar estudiantes se creo un boton de descarga de un documento csv de ejemplo

## Instalacion y ejecucion
Clonar el repositorio web
```bash
git clone <url-del-repositorio>
```

Acceder a la carpeta
```bash
cd web-ambito-educativo
```

Instalar dependencias
```bash
pnpm install
```

Ejecutar
```bash
pnpm dev
```

## Objetivo de la prueba técnica
- Arquitectura clara y modular
- Buen manejo de estado global
- Autenticación
- Uso de librerías modernas del ecosistema React
- Buenas prácticas en UX/UI y manejo de errores

