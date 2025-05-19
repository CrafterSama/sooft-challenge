## Sooft Interbanking Challenge

Website: [https://sooft-challenge-five.vercel.app/](https://sooft-challenge-five.vercel.app/)

Datos de inicio de sesión: admin@example.com:password

Una Pequeña WebApp, para "Agregar, Borrar y filtrar/buscar frases", lo primero que nos encontramos al abrir la aplicación es un inicio de sesión, usamos los datos que estan lineas mas arriba, ya dentro, luego de iniciar sesión, ya nos encontramos la pantalla para agregar las Frases

### Objetivos alcanzados

1. Agregar una frase. ✔️
2. Borrar una frase. ✔️
3. Filtrar/Buscar frases. ✔️

### Posibles Mejoras

1. Integrar con una API en un backend conectado a una BD para guardar las frases en la misma.
2. Uso de Tanstack/React Query para lo que es la conexión a los serivcios API y el cache de los datos
3. un Login con datos reales provenientes de una BD y el uso de JWT o cookies/token del lado del server para mejor seguridad


### Tecnologias utilizadas

Typescript, React, Next.js, Chakra UI, React Hook Form, Zustand y React Testing Library + vitest

Todo se creo de forma tal que se pudiera presentar lo solicitado, lo cual se logro, trate de mostrar un poco como normalmente suelo abordar un proyecto tratando siempres de usar buenas practicas, y hacer buen uso del patron modular lo que conlleva a una separarción clara de responsabilidades y mejora la mantenibilidad y reusabilidad de componentes y/o metodos/funciones, se decidio usar React Hook Form + Yup porque estos facilita el manejo del estado de los formularios y sus validaciones, se uso Chakra UI para facilitar la creación de los Layouts y la puesta a punto de algunos componentes como Botones, Inputs, sin embargo se pudo haber usado tambien tailwindCSS o Shadcn UI, Zustand se ocupo para manejar el estado global de la Aplicación, las razones, super obvias, el boilerplate es menor, su mantenibilidad es mejor y carece de una abstracción complicada para la puesta a punto, se uso inicio de sesion con cookies para mostrar el uso de las mismas, se crearon tests con React Testing Library y Vitest (Este ultimo mas por una cuestion de tiempos para evitar largos boilerplate o errores al momento de querer implementarlo).

### Razones Claves para elegir el patrón modular

Cada feature tiene su "módulo" autocontenido.

Se mantiene la separación de responsabilidades: UI, lógica, estado, modulos, servicios, etc.

Facilita el escalado del proyecto.

### Para empezar

#### Primero, instala todos los paquetes

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

#### Luego, corre el server en modo desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

#### Al Final, para correr un test

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```
