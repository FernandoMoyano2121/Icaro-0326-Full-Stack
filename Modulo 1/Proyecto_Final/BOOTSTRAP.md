# Guía de clases de Bootstrap 5.3 usadas en este proyecto

Este documento explica, clase por clase, **todo lo que tomamos prestado de Bootstrap** en
`index.html` (no las clases BEM propias como `.hero`, `.service-card`, `.work-grid`, etc.,
que ya están comentadas en `css/styles.css`). Para cada clase indicamos:

- **Qué hace** en este proyecto puntualmente.
- **Dónde vive** dentro de la documentación oficial: <https://getbootstrap.com/docs/5.3/>

La documentación de Bootstrap se organiza en 7 grandes secciones (Forms no se usa en esta
landing porque no tiene ningún formulario, pero la dejamos listada para que quede completo
el mapa): **Getting started, Customize, Layout, Content, Forms, Components, Helpers,
Utilities**.

---

## 1. Getting started

Sección donde Bootstrap explica cómo incorporarlo al proyecto (CDN, npm, requisitos del
`<meta viewport>`, etc.).

| Elemento en el HTML | Qué hace | Sub-sección de la doc |
|---|---|---|
| `<link href=".../bootstrap.min.css" rel="stylesheet">` | Trae el CSS ya compilado de Bootstrap 5.3 desde el CDN de jsDelivr. Es la base sobre la que después pisamos variables en `styles.css`. | **Getting started → Download** (métodos de instalación, ahí está el link del CDN) |
| `<script src=".../bootstrap.bundle.min.js">` | Trae el JS de Bootstrap (incluye Popper). Es lo que hace funcionar el menú hamburguesa (`data-bs-toggle="collapse"`). | **Getting started → Introduction / JavaScript** |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Meta tag responsive requerido por Bootstrap para que el grid funcione bien en mobile. | **Getting started → Introduction** |

---

## 2. Customize

Esta es la sección que explica cómo Bootstrap 5.2+ expone su diseño a través de **CSS
variables** (`--bs-*`), que es exactamente el mecanismo que usamos en `styles.css` para
pintar todo con nuestra paleta sin tocar el archivo compilado. El detalle completo de
*por qué* se hizo así ya está comentado línea por línea en `css/styles.css`; acá solo
mapeamos cada variable a su lugar en la documentación.

**Importante:** *Customize → CSS variables* solo lista las variables realmente **globales**
(las que viven en `:root`, como `--bs-body-color` o `--bs-primary`). Las variables **propias
de un componente puntual** (navbar, botones) NO están en esa página: viven dentro de la
página de ese componente específico, en una subsección propia llamada **"CSS → Variables"**.

| Variable CSS sobrescrita | Qué controla | Sub-sección de la doc |
|---|---|---|
| `--bs-primary`, `--bs-primary-rgb` | Color "primary" global de todo Bootstrap (botones, texto, bordes `.primary`) | **Customize → Color** |
| `--bs-link-color`, `--bs-link-hover-color`, `--bs-link-color-rgb`, `--bs-link-hover-color-rgb` | Color de los enlaces `<a>` por defecto y en hover | **Customize → CSS variables** (variable global) |
| `--bs-body-font-family`, `--bs-body-color` | Tipografía y color de texto que usa el Reboot (reset) de Bootstrap | **Customize → CSS variables** (variable global, consumida también en **Content → Reboot**) |
| `--bs-navbar-color`, `--bs-navbar-hover-color`, `--bs-navbar-active-color`, `--bs-navbar-disabled-color`, `--bs-navbar-brand-color`, `--bs-navbar-brand-hover-color`, `--bs-navbar-toggler-border-color`, `--bs-navbar-toggler-icon-bg` | Paleta local del componente Navbar (link normal/hover/activo, logo, borde e ícono del botón hamburguesa) | **No están en Customize → CSS variables.** Viven en **Components → Navbar**, subsección propia **CSS → Variables**, al final de esa página |
| `--bs-btn-color`, `--bs-btn-bg`, `--bs-btn-border-color`, `--bs-btn-hover-*`, `--bs-btn-active-*`, `--bs-btn-focus-shadow-rgb` | Paleta local de nuestra variante de botón `.btn--brand` | Tampoco están en Customize → CSS variables. Viven en **Components → Buttons**, subsección propia **CSS → Variables**, al final de esa página |

---

## 3. Layout

Todo lo que tiene que ver con la grilla y el espaciado estructural de la página.

| Clase | Dónde se usa | Qué hace | Sub-sección de la doc |
|---|---|---|---|
| `.container` | Envuelve el contenido de `nav`, `hero`, ambas `section` y el `footer` | Centra el contenido y le pone un ancho máximo con márgenes automáticos según el breakpoint | **Layout → Containers** |
| `.row` | Dentro del hero y de la sección de servicios | Crea una fila del sistema de grillas (usa `flexbox` y compensa el padding de las columnas con márgenes negativos) | **Layout → Grid** |
| `.col-lg-7` | Columna de texto del hero | Ocupa 7 de las 12 columnas disponibles, solo a partir del breakpoint `lg` | **Layout → Grid → Columnas** |
| `.col-md-6`, `.col-lg-4` | Las 3 tarjetas de servicios | En mobile ocupan la fila completa (por no tener `col-` a secas se apilan), desde `md` ocupan media fila (2 por fila) y desde `lg` un tercio (3 por fila) | **Layout → Grid → Columnas** |
| `.col-md-4` | Las 3 columnas del footer | Desde `md` cada columna ocupa un tercio del ancho (3 por fila) | **Layout → Grid → Columnas** |
| `.g-4` | Fila de las tarjetas de servicios | *Gutter* (espacio entre columnas) de tamaño 4 en ambos ejes | **Layout → Gutters** |
| `.gy-4` | Fila del footer | *Gutter* de tamaño 4 solo en el eje vertical (para cuando las columnas se apilan en mobile) | **Layout → Gutters** |

---

## 4. Content

Estilos base para elementos HTML "de contenido" (texto, listas, imágenes, tablas).

| Clase | Dónde se usa | Qué hace | Sub-sección de la doc |
|---|---|---|---|
| `.list-unstyled` | `<ul>` de enlaces del footer | Quita el `list-style` y el `padding-left` por defecto de una lista | **Content → Typography → Lists** |
| `.list-inline` | `<ul>` de redes sociales del footer | Convierte la lista en una fila horizontal (sin bullets) | **Content → Typography → Lists** |
| `.list-inline-item` | Cada `<li>` de redes sociales | Marca a cada ítem como parte de una lista en línea (le agrega el espaciado horizontal entre ítems) | **Content → Typography → Lists** |

---

## 5. Forms

No se usó ningún componente de esta sección: la landing no tiene formularios de contacto,
inputs ni selects. Se deja documentado solo para que el mapa de secciones quede completo.

---

## 6. Components

Los "widgets" armados de Bootstrap: acá vive el menú de navegación y los botones.

| Clase | Dónde se usa | Qué hace | Sub-sección de la doc |
|---|---|---|---|
| `.navbar` | `<nav>` | Clase base del componente: define el layout flexible del menú (logo + enlaces) | **Components → Navbar** |
| `.navbar-expand-lg` | `<nav>` | Define en qué breakpoint el navbar pasa de "colapsado" (mobile) a "expandido" (enlaces visibles en fila) | **Components → Navbar** |
| `.navbar-brand` | Logo textual (nav y footer) | Da el tamaño de fuente y el espaciado típico de un logo dentro del navbar | **Components → Navbar** |
| `.navbar-toggler` | Botón hamburguesa | Da estilo al botón que abre/cierra el menú en mobile | **Components → Navbar** |
| `.navbar-toggler-icon` | `<span>` dentro del botón hamburguesa | Dibuja el ícono de 3 líneas (vía SVG de fondo, el mismo que recoloreamos en `styles.css`) | **Components → Navbar** |
| `.collapse` | Contenedor de los enlaces (`#navbarMenu`) | Clase del comportamiento "colapsable": oculta/muestra el contenido con una transición | **Components → Collapse** (el motor que usa el Navbar) |
| `.navbar-collapse` | Mismo contenedor | Ajusta ese comportamiento colapsable específicamente al layout del navbar | **Components → Navbar** |
| `.navbar-nav` | `<ul>` de enlaces | Convierte la lista en la fila de enlaces propia del navbar (sin bullets, en flex) | **Components → Navbar** |
| `.nav-item` | Cada `<li>` de enlace | Envoltorio semántico de cada ítem de navegación | **Components → Navs & tabs** (clase compartida por Navbar y por Navs/Tabs) |
| `.nav-link` | Cada `<a>` de enlace | Da el padding, color y estados (hover/focus) típicos de un link de navegación | **Components → Navs & tabs** |
| `.active` | En el enlace "Inicio" (junto con `aria-current="page"`) | Marca visualmente cuál es la página/sección actual | **Components → Navs & tabs** (estado también documentado en Navbar) |
| `.btn` | CTA del hero y botones de las tarjetas | Clase base de cualquier botón de Bootstrap: padding, borde, cursor, transición | **Components → Buttons** |
| `.btn-lg` | CTA del hero | Modificador de tamaño: botón más grande (padding y fuente mayores) | **Components → Buttons → Sizes** |

---

## 7. Helpers

Clases chiquitas de un solo propósito, pensadas para resolver un problema puntual y muy
concreto (a diferencia de las Utilities, que son más genéricas).

| Clase | Dónde se usa | Qué hace | Sub-sección de la doc |
|---|---|---|---|
| `.visually-hidden-focusable` | Enlace "Saltar al contenido principal" | Oculta el elemento visualmente (sin sacarlo del flujo para lectores de pantalla) *hasta* que recibe foco por teclado, momento en el que se vuelve visible | **Helpers → Visually hidden** |

---

## 8. Utilities

Clases atómicas de una sola propiedad CSS, pensadas para combinarse libremente.

| Clase | Dónde se usa | Qué hace | Sub-sección de la doc |
|---|---|---|---|
| `.ms-auto` | `<ul class="navbar-nav ms-auto">` | `margin-left: auto`. Empuja los enlaces del menú hacia la derecha, dejando el logo fijo a la izquierda | **Utilities → Spacing** |
| `.mb-2` | Mismo `<ul>` | `margin-bottom` tamaño 2, para que no queden pegados los enlaces cuando el menú está colapsado en mobile | **Utilities → Spacing** |
| `.mb-lg-0` | Mismo `<ul>` | Anula ese margen inferior a partir del breakpoint `lg`, cuando el menú ya no está apilado | **Utilities → Spacing** |

---

## Nota aparte: Bootstrap Icons

Los íconos del footer (`bi bi-instagram`, `bi bi-twitter-x`, `bi bi-linkedin`,
`bi bi-facebook`) **no son parte de Bootstrap**: vienen de **Bootstrap Icons**, un proyecto
hermano pero independiente (con su propia documentación en
<https://icons.getbootstrap.com/>). Se incluye aparte, con su propio `<link>` a un CDN
distinto, porque no forma parte del core de `bootstrap.min.css`.
