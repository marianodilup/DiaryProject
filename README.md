# Memoria del Proyecto "DiaryProject"

## Introducción

Describimos aquí  el desarrollo de "MyDiary", un proyecto creado con React, en el que se ha realizado un SPA de un diario digital. A lo largo del desarrollo, hemos utilizado diversas tecnologías y herramientas para asegurar la calidad y funcionalidad del producto final. En particular, Figma fue utilizado para el diseño de la página del diario, y se ha utilizado el apartado de projects en github para llevar a cabo las actividades de cada miembro del equipo: Marian, Carmen y Carlos.

## Repositorio del Proyecto

El proyecto está versionado utilizando Git. Contiene varias ramas para gestionar las diferentes funcionalidades y fases del desarrollo.

### Ramas del Proyecto

1. **main**
   - La rama principal contiene la versión estable del proyecto. Todos los desarrollos y nuevas características se integran aquí después de pasar las pruebas necesarias realizadas en la rama **dev**.

2. **dev**
   - Rama de desarrollo donde se integran nuevas características antes de ser fusionadas con `main`. Dentro de `Dev` se crearon y gestionaron varias ramas para desarrollar y fusionar nuevas características a través de componentes y solucionar errores. Cada desarrollador a creado las ramas necesaria para llevar a cabo el proyecto:

Ramas creadas por https://github.com/marianodilup:
$ dev
editPost-header-styles
formCreatePost
login-register
master
select-styles
style-header
styles
Delete
Header
ListPost
Login
 Select
detail

Ramas creadas por https://github.com/Carlosgrpl: 
$ dev
  BugProof
  ListPostBranch
  ListPostSCSS
  LogInComponent
  NotFoundSCSS
  Register
  RegisterForm
  RegisterSCSS

  Ramas creadas por https://github.com/mateucarmen:
$dev
edit-post
jsx-select
jsx-select-changes
listpost-scss
login-scss
logout
master
register-logic
scss-revision
select-scss-revision
user-services
authroute-component
create-createPost
create-header


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



### TOP 8 Archivos Principales del proyecto:

- **`src/main.jsx`**: Punto de entrada principal de la aplicación.
- **`src/components/App.jsx`**: Componente principal que engloba la aplicación.
- **`src/components/Context/ApiContext.jsx`**: Contexto de la API para manejar las solicitudes y datos.
- **`src/components/Detail/Detail.jsx`**: Componente para mostrar los detalles de una entrada del diario.
- **`src/components/Header/Header.jsx`**: Componente del encabezado de la aplicación.
- **`src/components/ListPost/ListPost.jsx`**: Componente para listar las entradas del diario.
- **`src/components/Services/ApiCrud.jsx`**: Servicio para las operaciones CRUD con la API.
- **`scss/index.css`**: Estilos de la aplicación.

## Uso de Figma:

Para el diseño de la aplicación, utilizamos Figma para realizar un boceto de la misma. Figma es una herramienta colaborativa de diseño de aplicaciones web, esta nos permitió crear la estructura del proyecto, a través de bocetos, de cara a tener una visión global de la estructura del mismo, con el objetivo de dividirlo en tareas más pequeñas, entre los miembros del equipo.


## Proceso de Desarrollo:

Todas las tareas en las que se ha dividido el proyecto: 
https://github.com/users/marianodilup/projects/3/views/1

1. **Configuración Inicial del Proyecto**
   - Inicializamos el proyecto en React y configuramos Vite para el entorno de desarrollo.

2. **Creación de la API utilizando MockAPI
   - https://669156aa26c2a69f6e8f6d81.mockapi.io/diary

3. **Implementación de componentes y estilos**
   - Estilos y componentes fueron añadidos progresivamente para mantener coherencia con el desarrollo.

3. **Instalación de las dependencias necesaria para el proyecto**: 
   - npm install 
   - npm react router DOM
   - npm sass

4. **Desarrollo de Funcionalidades y Servicios**:
   - Utilizamos `Context API` para manejar el estado global de la aplicación.

5. **Merge final de la rama **Dev a la **Main.

## Conclusión:

Desarrollamos el proyecto "MyDiary"con una estructura clara y organizada, utilizando Figma para el diseño y Git para el control de versiones. Este enfoque permitió una colaboración efectiva y una implementación fluida de funcionalidades entre los miembros del equipo.

La integración de diferentes ramas y la corrección de errores aseguraron la realización de un proyecto final estable y funcional.



## Fuentes adicionales:

https://github.com/techiediaries/fake-api-jwt-json-server
