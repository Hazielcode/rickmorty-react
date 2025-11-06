# 🛸 Rick & Morty Universe

<div align="center">

**Aplicación web moderna para explorar el multiverso de Rick & Morty**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?logo=netlify&logoColor=white)](https://inquisitive-strudel-09475b.netlify.app)

[Demo en Vivo](https://inquisitive-strudel-09475b.netlify.app) • [Video Demo](https://youtu.be/MS2dLyQ6tQs) • [Reportar Issue](https://github.com/Hazielcode/rickmorty-react/issues)

</div>

---

## 📖 Descripción

Aplicación web desarrollada con **React + Vite + TypeScript** que consume la [API pública de Rick and Morty](https://rickandmortyapi.com/api) para explorar personajes del universo interdimensional. Proyecto académico que implementa buenas prácticas de desarrollo frontend moderno con arquitectura escalable y tipado estático.

---

## ✨ Características Principales

<table>
<thead>
<tr>
<th width="25%">Feature</th>
<th>Descripción</th>
<th width="15%">Estado</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>🛠️ Setup Modular</strong></td>
<td>Proyecto Vite con arquitectura limpia (components, pages, hooks, services)</td>
<td align="center">✅</td>
</tr>
<tr>
<td><strong>🌐 API REST</strong></td>
<td>Integración completa con Rick & Morty API mediante custom hook <code>useFetch</code></td>
<td align="center">✅</td>
</tr>
<tr>
<td><strong>🏠 Home Page</strong></td>
<td>Landing con hero section, descripción del proyecto y personajes destacados</td>
<td align="center">✅</td>
</tr>
<tr>
<td><strong>📜 Entities Page</strong></td>
<td>Listado paginado completo con nombre, especie y género de cada personaje</td>
<td align="center">✅</td>
</tr>
<tr>
<td><strong>🔗 SPA Routing</strong></td>
<td>Navegación fluida sin recargas mediante React Router DOM</td>
<td align="center">✅</td>
</tr>
<tr>
<td><strong>🎨 UI Responsive</strong></td>
<td>Diseño adaptable con Bootstrap 5 para todos los dispositivos</td>
<td align="center">✅</td>
</tr>
<tr>
<td><strong>☁️ CI/CD</strong></td>
<td>Deploy automatizado en Netlify con configuración SPA optimizada</td>
<td align="center">✅</td>
</tr>
</tbody>
</table>

---

## 🛠️ Stack Tecnológico

```
Frontend Framework    → React 18
Build Tool           → Vite
Language             → TypeScript
Routing              → React Router DOM v6
Styling              → Bootstrap 5
HTTP Client          → Fetch API + Custom Hook
API Source           → Rick and Morty API (REST)
Deployment           → Netlify
Version Control      → Git + GitHub
```

---

## 📂 Arquitectura del Proyecto

```
rickmorty-react/
│
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Card.tsx         # Tarjeta de personaje
│   │   └── Hero.tsx         # Sección hero principal
│   │
│   ├── hooks/               # Custom React Hooks
│   │   └── useFetch.ts      # Hook para peticiones HTTP
│   │
│   ├── pages/               # Páginas/Rutas principales
│   │   ├── Home.tsx         # Página de inicio (/)
│   │   └── Entities.tsx     # Listado completo (/entities)
│   │
│   ├── services/            # Lógica de negocio
│   │   └── api.ts           # Configuración y endpoints API
│   │
│   ├── App.tsx              # Componente raíz con routing
│   ├── main.tsx             # Entry point de la aplicación
│   └── index.css            # Estilos globales
│
├── public/                  # Assets estáticos
├── _redirects               # Configuración Netlify SPA
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Instalación y Ejecución

### Requisitos Previos

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (o yarn/pnpm)

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/Hazielcode/rickmorty-react.git
cd rickmorty-react

# 2. Instalar dependencias
npm install

# 3. Ejecutar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en: **http://localhost:5173**

### Comandos Disponibles

```bash
npm run dev        # Inicia el servidor de desarrollo
npm run build      # Genera build de producción en /dist
npm run preview    # Preview del build de producción
npm run lint       # Ejecuta ESLint
```

---

## 🌐 Deploy en Producción

### 🔗 Sitio en Vivo

**URL de Producción:** [https://inquisitive-strudel-09475b.netlify.app](https://inquisitive-strudel-09475b.netlify.app)

### Configuración de Deploy

El proyecto está configurado para **Netlify** con soporte completo para SPA routing mediante el archivo `_redirects`:

```
/*    /index.html   200
```

### Deploy Manual en Netlify

```bash
# 1. Instalar Netlify CLI
npm install -g netlify-cli

# 2. Hacer build
npm run build

# 3. Deploy
netlify deploy --prod --dir=dist
```

### Deploy Automático (Recomendado)

1. Conecta tu repositorio a Netlify
2. Configura build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Cada push a `main` despliega automáticamente

---

## 🎥 Demostración en Video

**🎬 Ver en YouTube:** **[Rick & Morty Universe - Demo Completa](https://youtu.be/MS2dLyQ6tQs)**

### Contenido del Video

1. ✅ Navegación entre rutas (`/` y `/entities`)
2. ✅ Funcionalidad de paginación
3. ✅ Consumo de API en tiempo real
4. ✅ Walkthrough del código fuente
5. ✅ Estructura de componentes
6. ✅ Repositorio en GitHub
7. ✅ Deploy en Netlify

---

## 📊 Funcionalidades Detalladas

### Ruta `/` (Home)

- Hero section con título y descripción del proyecto
- Grid de personajes destacados (primeros 8)
- Cards con imagen, nombre y especie
- Botón de navegación a listado completo

### Ruta `/entities` (Listado)

- Grid completo de todos los personajes
- Paginación funcional (20 personajes por página)
- Muestra 3 propiedades principales:
  - **Nombre** del personaje
  - **Especie** (Human, Alien, etc.)
  - **Género** (Male, Female, Unknown)
- Navegación fluida entre páginas
- Manejo de estados de carga y errores

### Custom Hook `useFetch`

```typescript
// Características del hook
- Tipado genérico con TypeScript
- Manejo de estados: loading, data, error
- Reutilizable en cualquier componente
- Efecto secundario con cleanup
```

---

## 🔧 Tecnologías y Dependencias

### Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.x.x",
  "bootstrap": "^5.3.x"
}
```

### DevDependencies

```json
{
  "@vitejs/plugin-react": "^4.x.x",
  "typescript": "^5.x.x",
  "vite": "^7.x.x",
  "@types/react": "^18.x.x",
  "@types/react-dom": "^18.x.x"
}
```

---

## 🎯 Criterios de Evaluación Cumplidos

| Criterio | Puntaje | Estado |
|----------|---------|--------|
| Configuración inicial del proyecto | 2 pts | ✅ |
| Consumo de API pública | 2 pts | ✅ |
| Implementación ruta "/" | 2 pts | ✅ |
| Implementación ruta "/entities" | 3 pts | ✅ |
| Navegación con React Router | 2 pts | ✅ |
| Aplicación de framework de estilos | 1 pt | ✅ |
| **TOTAL** | **12/12** | **✅** |

---

## 🤝 Contribuciones

Este es un proyecto académico, pero las sugerencias son bienvenidas:

1. Fork el proyecto
2. Crea tu rama: `git checkout -b feature/mejora`
3. Commit: `git commit -m 'Add: nueva funcionalidad'`
4. Push: `git push origin feature/mejora`
5. Abre un Pull Request

---

## 📝 Roadmap Futuro

- [ ] Implementar búsqueda de personajes por nombre
- [ ] Añadir filtros por especie, estado y género
- [ ] Vista detalle individual de cada personaje
- [ ] Sistema de favoritos con localStorage
- [ ] Modo oscuro/claro
- [ ] Testing con Vitest + React Testing Library
- [ ] PWA con soporte offline
- [ ] Animaciones con Framer Motion

---

## 👨‍💻 Autor

**Samir Haziel Alfonso Solórzano**

- 🎓 Estudiante de Desarrollo de Software - TECSUP
- 📧 Email: samir.haziel@tecsup.edu.pe
- 💼 GitHub: [@Hazielcode](https://github.com/Hazielcode)
- 🌍 Lima, Perú
- 📅 Proyecto Académico 2025-2

---

## 📄 Licencia

Este proyecto es de uso académico bajo Licencia MIT. Ver archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- **Rick and Morty API** por proporcionar una API REST gratuita y bien documentada
- **TECSUP** por la formación académica de calidad
- **Comunidad React** por las herramientas y recursos educativos
- **Vite Team** por el tooling ultrarrápido de desarrollo

---

<div align="center">

**⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub ⭐**

---

Desarrollado con 💚 y ☕ en Lima, Perú | **TECSUP 2025**

</div>
