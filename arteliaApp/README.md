# Artelía - Digital Art Gallery

Una galería digital de arte contemporáneo construida con **React**, **Vite**, **TypeScript**, y **Tailwind CSS**.

## 📁 Estructura del Proyecto

```
arteliaApp/
├── src/
│   ├── components/
│   │   ├── Common/              # Componentes compartidos
│   │   │   ├── NavBar.tsx       # Navegación principal
│   │   │   ├── Footer.tsx       # Pie de página
│   │   │   └── index.ts         # Exportaciones
│   │   │
│   │   ├── Home/                # Sección HOME
│   │   │   ├── HomePage.tsx     # Página principal
│   │   │   └── index.ts
│   │   │
│   │   ├── About/               # Sección SOBRE NOSOTROS
│   │   │   ├── AboutPage.tsx    # Visión del curador, contacto
│   │   │   └── index.ts
│   │   │
│   │   ├── Gallery/             # Sección GALERÍA
│   │   │   ├── GalleryPage.tsx  # Grid de obras
│   │   │   └── index.ts
│   │   │
│   │   ├── Exhibitions/         # Sección EXPOSICIONES
│   │   │   ├── ExhibitionsPage.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── Profile/             # Sección PERFIL
│   │   │   ├── ProfilePage.tsx  # Perfil del artista
│   │   │   └── index.ts
│   │   │
│   │   └── Detail/              # Sección DETALLE
│   │       ├── DetailPage.tsx   # Detalle de una obra
│   │       └── index.ts
│   │
│   ├── styles/                  # Estilos compartidos (opcional)
│   ├── types/                   # TypeScript interfaces
│   ├── utils/                   # Funciones utilitarias
│   ├── App.tsx                  # Componente principal (Router)
│   ├── main.tsx                 # Entrada de la app
│   ├── index.css                # Estilos globales
│   └── vite-env.d.ts
│
├── public/                      # Archivos estáticos
├── index.html                   # HTML principal
├── tailwind.config.js           # Configuración de Tailwind
├── postcss.config.js            # Configuración de PostCSS
├── vite.config.ts               # Configuración de Vite
├── tsconfig.json                # Configuración de TypeScript
├── package.json
└── README.md                    # Este archivo
```

## 🎨 Secciones y Componentes

### 1. **Common** - Componentes Compartidos
- `NavBar`: Navegación fija en la parte superior
- `Footer`: Pie de página con información de contacto

### 2. **Home** - Página Principal
- Sección hero con llamada a la acción
- Introducción a la galería

### 3. **About** - Sobre Nosotros
- Visión del curador
- Formulario de inquiries
- Información de ubicación y horarios

### 4. **Gallery** - Galería
- Grid de obras de arte
- Filtros y búsqueda (próximo)
- Enlaces a detalles de obras

### 5. **Exhibitions** - Exposiciones
- Lista de exposiciones actuales y pasadas
- Detalles de cada exposición

### 6. **Profile** - Perfil del Artista
- Información del artista
- Obras destacadas
- Botones de contacto

### 7. **Detail** - Detalle de la Obra
- Imagen grande de la obra
- Información completa (dimensiones, año, precio)
- Obras relacionadas del mismo artista
- Botón de inquiries

## 🚀 Cómo Empezar

### Requisitos
- Node.js 16+ 
- npm o yarn

### Instalación

```bash
# Entrar al directorio del proyecto
cd arteliaApp

# Instalar dependencias (ya completado)
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

### Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview

# Linting (Oxlint)
npm run lint
```

## 🎨 Personalización de Estilos

### Tailwind CSS
Los colores, fuentes y otros estilos están definidos en `tailwind.config.js`:

```javascript
{
  colors: {
    primary: "#0a0a0a",
    secondary: "#894f3b",
    surface: "#fcf9f8",
    // ... más colores
  },
  fontFamily: {
    headline: ["Noto Serif", "serif"],
    body: ["Manrope", "sans-serif"],
  }
}
```

### Estilos Globales
Los estilos globales y componentes de Tailwind están en `src/index.css`

## 📱 Características

- ✅ Diseño responsive
- ✅ Navegación con React Router
- ✅ TypeScript para type safety
- ✅ Tailwind CSS para estilos
- ✅ Componentes reutilizables
- ✅ Dark mode listo (estructura en place)

## 🔮 Próximas Mejoras

- [ ] Integración con API de imágenes
- [ ] Sistema de filtros en galería
- [ ] Carrito de compras
- [ ] Autenticación de usuarios
- [ ] Blog/Journal
- [ ] Sistema de búsqueda
- [ ] Soporte para múltiples idiomas

## 📝 Notas Técnicas

- **React 18+**: Framework principal
- **Vite**: Build tool y dev server ultrarrápido
- **TypeScript**: Tipado estático para mayor seguridad
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Enrutamiento del lado del cliente
- **PostCSS + Autoprefixer**: Procesamiento de CSS

## 🤝 Contribuir

Para añadir nuevas secciones:

1. Crear carpeta en `src/components/NuevaSeccion/`
2. Crear componente `NuevaSeccion.tsx`
3. Crear archivo `index.ts` con exportaciones
4. Importar en `App.tsx` y agregar ruta
5. Actualizar `NavBar.tsx` con el enlace

## 📄 Licencia

© 2024 Artelía Digital Gallery. All rights reserved.

---

**Hecho con ❤️ para Artelía**

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
