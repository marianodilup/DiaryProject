# React + Vite

https://www.emailjs.com/docs/examples/reactjs/
https://github.com/techiediaries/fake-api-jwt-json-server

API:
https://669156aa26c2a69f6e8f6d81.mockapi.io/diary

correo: diarioreact@gmail.com
contraseña: proyectodiarioreact2

# Memoria del Proyecto "DiaryProject"

## Introducción
Describimos aquí  el desarrollo de nuestro "DiaryProject", un proyecto creado con React, en el que se ha realizado un SPA de un diario digital. A lo largo del desarrollo, hemos utilizado diversas tecnologías y herramientas para asegurar la calidad y funcionalidad del producto final. En particular, Figma fue utilizado para el diseño de la interfaz de usuario, y se ha utilizado el apartado de projects en github para llevar a cabo las actividades de cada miembro del equipo: Marian, Carmen y Carlos.

## Repositorio del Proyecto
El proyecto está versionado utilizando Git. Contiene varias ramas para gestionar las diferentes funcionalidades y fases del desarrollo.

### Ramas del Proyecto
1. **main**
   - La rama principal contiene la versión estable del proyecto. Todos los desarrollos y nuevas características se integran aquí después de pasar las pruebas necesarias.
2. **dev**
   - Rama de desarrollo donde se integran nuevas características antes de ser fusionadas con `main`. Dentro de `Dev` se crearon y gestionaron varias ramas para desarrollar y fusionar nuevas características y solucionar errores. Entre las ramas creadas se incluyen: feature/api-integration para la integración de la API y los servicios necesarios. Además, se realizaron varios commits significativos como la fusión del `componente Detail`, la `creación y funcionalidad del formulario de edición de publicaciones`, la `adición de un formulario en el componente de registro`, la `navegación en el componente de inicio de sesión`, y la `revisión de las páginas de datos de autenticación`. También se implementaron y ajustaron diversos servicios y componentes, como `ListPost, CreatePost, y Select`, así como la configuración y funcionamiento completo de la SPA.  

## Estructura del Proyecto
La estructura del proyecto se organizó de la siguiente manera:

DiaryProject/
├── public/
│ └── vite.svg
├── src/
│ ├── components/
│ │ ├── App.jsx
│ │ ├── Context/
│ │ │ └── ApiContext.jsx
│ │ ├── Detail/
│ │ │ └── Detail.jsx
│ │ ├── Header/
│ │ │ └── Header.jsx
│ │ ├── ListPost/
│ │ │ └── ListPost.jsx
│ │ ├── Services/
│ │ │ └── ApiCrud.jsx
│ ├── main.jsx
├── scss/
│ └── index.css
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js



### Archivos Principales
- **`src/main.jsx`**: Punto de entrada principal de la aplicación.
- **`src/components/App.jsx`**: Componente principal que engloba la aplicación.
- **`src/components/Context/ApiContext.jsx`**: Contexto de la API para manejar las solicitudes y datos.
- **`src/components/Detail/Detail.jsx`**: Componente para mostrar los detalles de una entrada del diario.
- **`src/components/Header/Header.jsx`**: Componente del encabezado de la aplicación.
- **`src/components/ListPost/ListPost.jsx`**: Componente para listar las entradas del diario.
- **`src/components/Services/ApiCrud.jsx`**: Servicio para las operaciones CRUD con la API.
- **`scss/index.css`**: Estilos de la aplicación.

## Uso de Figma
Para el diseño de la interfaz de usuario, utilizamos Figma, una herramienta colaborativa de diseño de interfaces. Figma permitió crear prototipos interactivos y compartirlos con los miembros del equipo para recibir retroalimentación rápida. Las siguientes etapas se completaron en Figma:

1. **Visualización Inicial de la Estructura del Proyecto**: Bocetos de baja fidelidad para definir la estructura básica de la aplicación.
2. **Prototipos de Alta Fidelidad**: Diseño detallado con colores, tipografía y componentes interactivos.
3. **Feedback y Revisión**: Iteraciones basadas en la retroalimentación del equipo y los usuarios.

## Proceso de Desarrollo
1. **Configuración Inicial del Proyecto**
   - Inicializamos el proyecto con `npm init` y configuramos Vite para el entorno de desarrollo.
2. **Implementación de componentes**
   - Estilos y componentes fueron añadidos progresivamente para mantener coherencia con el desarrollo.
3. **Desarrollo de Funcionalidades**
   - En la rama `feature/api-integration`, integramos la API para manejar las entradas del diario.
   - Utilizamos `Context API` para manejar el estado global de la aplicación.

## Conclusión
Desarrollamos "DiaryProject"con una estructura clara y organizada, utilizando Figma para el diseño y Git para el control de versiones. Este enfoque permitió una colaboración efectiva y una implementación fluida de funcionalidades entre los 3 miembros del equipo.

La integración de diferentes ramas y la corrección de errores aseguraron un producto final estable y funcional.
