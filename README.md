
# 🌍 BIA Frontend Challenge

Este proyecto es una solución al reto frontend propuesto por BIA. Está construido usando **Next.js 15 (App Router)**, **React 19**, **TypeScript** y **MUI v7**, con enfoque en accesibilidad, rendimiento y experiencia de usuario.

---

## 📐 Arquitectura y Enfoque de la Solución

Se utilizó una arquitectura modular y escalable basada en componentes funcionales y separación clara de responsabilidades.

### 📁 Estructura de carpetas

```
.
├── app/                  
│   ├── dashboard/        # Página principal (async server component)
│   └── themeRegistry.tsx # Proveedor global de tema (MUI Theme)
├── components/           # Componentes reutilizables: Header, Footer, etc.
├── lib/                  # Lógica de negocio: fetch de datos, utilidades
├── MUI/                  # Definición del tema (paleta personalizada)
├── public/               # Imágenes y archivos estáticos
├── styles/               # Estilos globales (globals.css)
└── README.md
```

---

## 🎨 Manejo de Tema Oscuro / Claro

Se utilizó el sistema de CSS variables de **MUI** (`CssVarsProvider`) para soportar temas `light`, `dark` y `system`.

- Configuración de color:
  - `colorSchemeSelector: 'data-color-scheme'`
  - `attribute: 'data-color-scheme'`
  - `modeStorageKey: 'mui-mode'`
- Se permite cambiar el tema manualmente desde el botón del header.
- El modo se conserva entre sesiones mediante `localStorage`.

---

## 🧱 Diseño Responsivo

- Se usaron componentes de MUI y breakpoints (`sx={{ px: { xs: 12, md:6 } }}`) para adaptar contenido a móviles y desktop.

---

## 📡 Lógica de Datos

Se creó una función `getCountries()` en `lib/` que realiza el fetch desde la fuente correspondiente (API o mock).

La obtención de datos se hace desde un componente **server-side async**, aprovechando las capacidades de Next.js App Router.

---

## 🚀 Instalación y Uso

```bash
# 1. Clonar repositorio
git clone https://github.com/Wcamprog/bia-test-fe.git
cd bia-test-fe

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor local
npm run dev

# 4. Abrir en el navegador
http://localhost:3000
```

---

## 🧩 Dependencias Clave

| Paquete          | Versión         | Descripción                              |
|------------------|------------------|------------------------------------------|
| `next`           | ^15              | Framework base (App Router)              |
| `react`          | ^19              | Biblioteca principal de UI               |
| `@mui/material`  | ^7               | Componentes UI + Theme system            |
| `@emotion/react` | ^11              | Styling para MUI                         |
| `react-icons`    | ^4               | Íconos (FontAwesome, etc.)               |
| `typescript`     | ^5               | Tipado estático                          |

---


## 📎 Consideraciones Técnicas

- **Modo de color persistente**: la selección de tema se guarda con `modeStorageKey`.
- **Componentes desacoplados**: el layout se compone de `<Header />`, `<main />` y `<Footer />` sin que se solapen.
- **Estilos globales**: fuentes de Google (Geist y Mono) importadas vía `next/font`.


---

## 📬 Autor

**Camilo Andrés Garzón Pineda**  
GitHub: [@Wcamprog](https://github.com/Wcamprog)  
Correo: wcamprog@gmail.com
