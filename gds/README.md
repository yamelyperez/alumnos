# Sistema de alumnos calificaciones con Firebase

Este proyecto es una aplicación web simple que permite registrar las calificaciones de alumnos  usando Firebase Firestore como base de datos. Implementa funciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar libros, incluyendo títulos, autores, géneros y disponibilidad.

## Tecnologías utilizadas

- HTML, CSS y JavaScript (Vanilla)
- Firebase (Firestore)
- Replit (como entorno de desarrollo online)

##  Estructura del proyecto


##  Configuración

1. Crea un proyecto en [Firebase](https://console.firebase.google.com/)
2. Activa **Firestore Database** y **modo prueba** por 30 días.
3. Copia las credenciales del proyecto (API Key, Project ID, etc.)
4. Pega esos datos en `firebase-config.js`
5. Abre el proyecto en [Replit](https://replit.com/) o localmente.

##  Funcionalidades

-  Registrar calificaciones de los alumnos con campos como nombre, apellido, edad, num.control, materias, calificaciones y materias adeudadas
-  Buscar alumno  por nombre.
-  Editar la información del nombre.
-  Eliminar nombre de la coleccion.
-  Lectura en tiempo real desde Firestore.

## ¿Por qué usamos Firebase?

Firebase ofrece:
- Conexión en tiempo real a la base de datos
- Escalabilidad sin necesidad de backend propio
- Fácil integración con aplicaciones web

##  Para qué sirve este proyecto

- Aprender a usar Firebase con JavaScript puro
- Implementar operaciones CRUD en la nube
- Conocer cómo se organizan subcolecciones y arreglos
- Usar Firestore para proyectos educativos o personales

##  Autor

- Proyecto de ejemplo generado en Replit + Firebase
