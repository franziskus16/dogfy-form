# Multi-step Form Application - Technical Test

## Descripción del proyecto

Aplicación frontend desarrollada con **Vue 3**, **Nuxt 3** y **TypeScript**, implementando un formulario multi-paso inspirado en [dogfydiet.com](https://dogfydiet.com). Se aplican los principios de **Domain-Driven Design (DDD)** y **Arquitectura Hexagonal** para lograr una separación clara entre lógica de negocio, UI y servicios externos.

El formulario incluye un mecanismo de **A/B testing** que asigna usuarios aleatoriamente a dos grupos para mostrar o saltar el paso 6 ("Nivel de Actividad"), con persistencia local para mantener consistencia y registro básico de eventos analíticos.

---

## Tecnologías usadas

- Vue 3 + Nuxt 3
- TypeScript
- Pinia para gestión del estado
- Vitest para tests unitarios
- Playwright para tests end-to-end
- Storybook para documentación de componentes
- LocalStorage para persistencia

---

## Estado actual y cumplimiento de requisitos

| Requisito                       | Estado        |
| ------------------------------- | ------------- |
| Hexagonal Architecture y DDD    | ✅ Completado |
| Multi-step form                 | ✅ Completado |
| A/B testing con persistencia    | ✅ Completado |
| Analytics para eventos clave    | ✅ Completado |
| Estado con Pinia y LocalStorage | ✅ Completado |
| Tests unitarios y E2E           | ✅ Completado |
| Documentación en Storybook      | ✅ Completado |
| README con instrucciones        | ✅ Completado |

---

## Instalación y ejecución

### Requisitos previos

- Node.js v16+
- npm o yarn

### Pasos para desarrollo local

```bash
git clone <repo-url>
cd <repo-folder>
npm install
npm run dev
```

La app estará disponible en [http://localhost:3000](http://localhost:3000).

### Uso con Docker (opcional)

```bash
docker build -t multi-step-form .
docker run -p 3000:3000 multi-step-form
```

---

## Ejecutar tests

### Unit tests con Vitest

```bash
npm run test
```

### Tests end-to-end con Playwright

Dejar ejecutado el proyecto con npm run dev para poder hacer el test e2e:

```bash
npx playwright test
```

---

## Verificar funcionalidad A/B testing

1. Borra el LocalStorage en el navegador (puedes hacerlo desde DevTools).
2. Recarga la página para que se asigne aleatoriamente un grupo.
3. Observa en la consola eventos `ab_group_assigned` que indican el grupo asignado (A o B).
4. El paso 6 ("Nivel de Actividad") aparecerá o se saltará según el grupo.
5. Completa el formulario para ver el mensaje `Formulario enviado con éxito!` en pantalla.

---

## Estructura del proyecto

```
/components      # Componentes UI reutilizables
/domains         # Entidades y lógica de negocio (DDD)
/pages           # Página principal y la estructura del form
/layouts         # Estructura del container dentro del form
/store           # Pinia stores para estado
/server          # Servicios externos y persistencia
/tests           # Tests unitarios y E2E
/storybook       # Documentación de componentes
/utils           # Design Tokens para todos los estilos
```

---

## Decisiones de arquitectura y diseño

- **Hexagonal Architecture:** Separación clara entre dominio, interfaz y servicios para facilitar mantenimiento y escalabilidad.
- **Domain-Driven Design:** Modelado explícito del dominio y lógica central para evitar lógica dispersa en UI.
- **Pinia:** Solución ligera y moderna para gestión de estado reactiva y sincronización con LocalStorage.
- **Testing:** Cobertura estratégica en lógica central y componentes clave, además de pruebas E2E para flujos completos.
- **A/B Testing:** Persistencia de asignación para evitar inconsistencias, con eventos analíticos para seguimiento.

---

## Documentación de componentes

Se puede visualizar mediante Storybook:

```bash
npm run storybook
```

Esto abrirá una interfaz interactiva en [http://localhost:6006](http://localhost:6006) donde puedes explorar los componentes UI.

---

## Notas finales

- La aplicación está diseñada con foco en mantenibilidad, escalabilidad y claridad de dominio.
- Se ha usado ChatGPT para asesoramiento en según que partes del proceso y para revisión de codigo en algúna parte del Repositorio.

## Autor

Francesc Gimenez Gil
