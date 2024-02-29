# Prueba Técnica BackEnd

Este proyecto es una prueba técnica de backend proporcionada por la empresa Listo Chile, con el objetivo de evaluar habilidades y conocimientos técnicos en el desarrollo de aplicaciones web.

## Tecnologías utilizadas

- NestJS (NodeJS)
- TypeScript
- MongoDB
- GraphQL

## Instalación

1. Ejecute `npm install` para instalar todas las dependencias del proyecto.
2. Cree un archivo `.env` en la raíz del proyecto.
3. Copie y pegue el contenido del archivo `env.template` en el archivo `.env`.
4. Cambie la variable `DB_CONNECTION_STRING` en el archivo `.env` por su cadena de conexión de MongoDB Atlas.

## Uso

Para utilizar este proyecto, siga estos pasos:

1. Ejecute `npm run start` para correr el proyecto.
2. Diríjase a `http://localhost:3000/graphql` en su navegador para acceder al playground de GraphQL.
3. Desde el playground de GraphQL, puede realizar las siguientes acciones:
   - Obtener todas las empresas.
   - Obtener una empresa por su ID.
   - Crear una nueva empresa.
   - Actualizar una empresa existente.
   - Eliminar una empresa.

## Autor

Este proyecto fue desarrollado por Stephen Reyes.
