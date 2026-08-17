# 📋 Estructura del Proyecto Artelía - APP React

Este documento describe la estructura profesional creada para la aplicación web de **Artelía - Digital Art Gallery**.

## 🏗️ Arquitectura General

El proyecto utiliza una estructura **modular y escalable** con separación clara por secciones de la aplicación:

```
arteliaApp/                           # Raíz del proyecto Vite + React
│
├── 📁 public/                        # Archivos estáticos (favicon, etc.)
│
├── 📁 src/                           # Código fuente TypeScript
│   │
│   ├── 📁 components/                # Componentes React organizados por sección
│   │   │
│   │   ├── 📁 Common/                🔄 Componentes Reutilizables
│   │   │   ├── NavBar.tsx           # Navegación principal (fija)
│   │   │   ├── Footer.tsx           # Pie de página
│   │   │   └── index.ts             # Exportaciones
│   │   │
│   │   ├── 📁 Home/                  🏠 Página Principal
│   │   │   ├── HomePage.tsx         # Hero + CTA
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 About/                 ℹ️ Sobre Nosotros
│   │   │   ├── AboutPage.tsx        # Visión, formulario, contacto
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 Gallery/               🎨 Galería
│   │   │   ├── GalleryPage.tsx      # Grid de obras
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 Exhibitions/           🖼️ Exposiciones
│   │   │   ├── ExhibitionsPage.tsx  # Lista de exposiciones
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 Profile/               👤 Perfil del Artista
│   │   │   ├── ProfilePage.tsx      # Bio + obras
│   │   │   └── index.ts
│   │   │
│   │   └── 📁 Detail/                📸 Detalle de Obra
│   │       ├── DetailPage.tsx       # Info completa + relacionadas
│   │       └── index.ts
│   │
│   ├── 📁 styles/                    🎨 Estilos Compartidos
│   │   └── (Para stylesheets específicos - actualmente en index.css)
│   │
│   ├── 📁 types/                     🔷 TypeScript Interfaces
│   │   └── (Para definiciones de tipos reutilizables)
│   │
│   ├── 📁 utils/                     🛠️ Funciones Utilitarias
│   │   └── (Helpers, conversiones, validaciones)
│   │
│   ├── App.tsx                       ⚡ Componente Principal
│   │                                 (Router + Layout)
│   │
│   ├── main.tsx                      🎯 Punto de entrada
│   │
│   ├── index.css                     💅 Estilos Globales
│   │                                 (Tailwind + Custom)
│   │
│   └── vite-env.d.ts                 TypeScript Vite types
│
├── index.html                        📄 HTML principal
│
├── 🔧 Archivos de Configuración
│   ├── tailwind.config.js            Configuración de Tailwind
│   ├── postcss.config.js             Procesamiento de CSS
│   ├── vite.config.ts                Build tool config
│   ├── tsconfig.json                 TypeScript config
│   ├── tsconfig.app.json             TypeScript app config
│   ├── .oxlintrc.json                Linter config (Oxlint)
│   └── .gitignore
│
├── package.json                      📦 Dependencias
├── package-lock.json
│
└── README.md                         📚 Documentación
```

## 📦 Dependencias Principales

```json
{
  "react": "^18.x",                  # Framework UI
  "react-dom": "^18.x",              # React renderizado en DOM
  "react-router-dom": "^6.x",        # Enrutamiento SPA
  "typescript": "~5.x",              # Tipado estático
  "vite": "^6.x",                    # Build tool
  "tailwindcss": "^3.x",             # Utility CSS
  "postcss": "^8.x",                 # CSS processor
  "autoprefixer": "^10.x"            # Prefijos CSS
}
```

## 🎯 Patrones de Desarrollo

### Componentes por Sección

Cada sección sigue el mismo patrón:

```
NuevaSeccion/
├── NuevaSeccion.tsx       # Componente principal
└── index.ts               # Exportación: export { NuevaSeccion } from './NuevaSeccion'
```

### Importación en App.tsx

```typescript
import { NuevaSeccion } from './components/NuevaSeccion'

// En Routes:
<Route path="/nueva-seccion" element={<NuevaSeccion />} />
```

## 🎨 Sistema de Diseño

### Colores (Tailwind)
- **primary**: `#0a0a0a` (negro principal)
- **secondary**: `#894f3b` (terracota)
- **surface**: `#fcf9f8` (fondo claro)
- **tertiary**: `#060c01` (verde oscuro)

### Tipografías
- **headline**: Noto Serif (títulos grandes)
- **display**: Noto Serif (subtítulos)
- **body**: Manrope (texto cuerpo)
- **label**: Manrope (etiquetas)

### Utilidades CSS Personalizadas
- `.glass-nav`: Efecto glass morphism en navbar
- `.hero-gradient`: Gradiente para hero sections
- `.floating-input`: Labels que flotan en inputs

## 🚀 Cómo Agregar Nuevas Secciones

### Paso 1: Crear estructura
```bash
mkdir src/components/NuevaSeccion
```

### Paso 2: Crear componente
```tsx
// src/components/NuevaSeccion/NuevaSeccion.tsx
import React from 'react'

export const NuevaSeccion: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-24">
      {/* Contenido */}
    </section>
  )
}
```

### Paso 3: Crear exportación
```ts
// src/components/NuevaSeccion/index.ts
export { NuevaSeccion } from './NuevaSeccion'
```

### Paso 4: Registrar en App.tsx
```tsx
import { NuevaSeccion } from './components/NuevaSeccion'

<Route path="/nueva-seccion" element={<NuevaSeccion />} />
```

### Paso 5: Añadir al NavBar (opcional)
```tsx
<a href="/nueva-seccion" className="...">Nueva Sección</a>
```

## 📱 Estructura Responsive

Los componentes usan clases de Tailwind para responsive:
- Móvil: `sm:` (640px)
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)
- Pantallas amplias: `xl:` (1280px)

## ✅ Convenciones de Código

### Nombres de Archivos
- Componentes: PascalCase (`HomePage.tsx`)
- Utilities/Hooks: camelCase (`useGallery.ts`)
- Estilos: camelCase (`gallery.module.css`)

### Estructura de Imports
```tsx
import React from 'react'           // React
import { useRouter } from 'react-router-dom'  // Librerías externas
import { NavBar } from './components/Common'   // Componentes locales
import './styles.css'                // Estilos
```

### TypeScript
```tsx
interface IProduct {
  id: number
  title: string
  price: number
}

export const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  // Component logic
}
```

## 🔄 Flujo de Navegación

```
/ (Home)
├── /about (About)
├── /gallery (Gallery)
├── /exhibitions (Exhibitions)
├── /profile (Profile)
└── /detail (Detail)
```

Todos los componentes comparten:
- `NavBar` (arriba)
- `Footer` (abajo)

## 📊 Estructura de Data (Próxima Fase)

Se recomienda crear:

```typescript
// src/types/index.ts
export interface IArtwork {
  id: string
  title: string
  artist: string
  image: string
  price: number
  year: number
  description: string
}

export interface IArtist {
  id: string
  name: string
  bio: string
  image: string
  works: IArtwork[]
}

export interface IExhibition {
  id: string
  title: string
  startDate: Date
  endDate: Date
  description: string
  image: string
}
```

## 🎯 Siguientes Pasos

1. ✅ Estructura base creada
2. ⏳ Conectar con API/CMS
3. ⏳ Implementar filtros en galería
4. ⏳ Sistema de carrito
5. ⏳ Autenticación
6. ⏳ Blog/Journal
7. ⏳ i18n (Internacionalización)

---

**Documentación actualizada**: 17/08/2026  
**Versión del Proyecto**: 1.0.0  
**Stack**: React 18 + Vite + TypeScript + Tailwind CSS
