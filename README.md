# 🛸 Rick & Morty Universe

<div align="center">


**Explora el multiverso de Rick & Morty con esta aplicación web interactiva**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[Demo en vivo](https://rickmorty-react.vercel.app) · [Reportar Bug](https://github.com/Hazielcode/rickmorty-react/issues) · [Solicitar Feature](https://github.com/Hazielcode/rickmorty-react/issues)

</div>

---

## 📋 Descripción

Aplicación web moderna desarrollada con **React**, **Vite** y **TypeScript** que consume la [API pública de Rick and Morty](https://rickandmortyapi.com/api). Permite explorar personajes del universo interdimensional con navegación fluida, listado dinámico y paginación avanzada.

### ✨ Características principales

- 🎯 **Interfaz intuitiva** con diseño responsive
- 🚀 **Carga rápida** gracias a Vite
- 📱 **Mobile-first** adaptable a cualquier dispositivo
- 🔍 **Navegación fluida** entre páginas sin recargas
- 📊 **Paginación dinámica** para explorar todos los personajes
- 🎨 **UI moderna** con Bootstrap 5

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 18 | Biblioteca UI |
| **TypeScript** | 5.0 | Tipado estático |
| **Vite** | 7 | Build tool ultrarrápido |
| **React Router DOM** | 6 | Enrutamiento SPA |
| **Bootstrap** | 5 | Framework CSS |
| **Fetch API** | Nativa | Consumo de API REST |
| **Custom Hooks** | `useFetch` | Lógica reutilizable |

---

## 🎯 Funcionalidades Implementadas

<table>
<thead>
<tr>
<th>Feature</th>
<th>Descripción</th>
<th>Estado</th>
<th>Puntos</th>
</tr>
</thead>
<tbody>
<tr>
<td>🛠️ Setup</td>
<td>Configuración del proyecto con arquitectura limpia</td>
<td>✅</td>
<td>2</td>
</tr>
<tr>
<td>🌐 API REST</td>
<td>Integración completa con Rick & Morty API</td>
<td>✅</td>
<td>2</td>
</tr>
<tr>
<td>🏠 Home</td>
<td>Landing page con hero y preview de personajes</td>
<td>✅</td>
<td>2</td>
</tr>
<tr>
<td>📜 Entities</td>
<td>Listado completo con 3+ propiedades y paginación</td>
<td>✅</td>
<td>3</td>
</tr>
<tr>
<td>🔗 Routing</td>
<td>Navegación SPA con React Router DOM</td>
<td>✅</td>
<td>2</td>
</tr>
<tr>
<td>🎨 Estilos</td>
<td>Diseño responsive con Bootstrap 5</td>
<td>✅</td>
<td>1</td>
</tr>
<tr>
<td colspan="3"><strong>TOTAL</strong></td>
<td><strong>12/12</strong></td>
</tr>
</tbody>
</table>

---

## 📂 Estructura del Proyecto

```
rickmorty-react/
│
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── NavBar.tsx      # Barra de navegación
│   │   ├── Hero.tsx        # Sección hero
│   │   └── Card.tsx        # Tarjeta de personaje
│   │
│   ├── hooks/              # Custom hooks
│   │   └── useFetch.ts     # Hook para peticiones HTTP
│   │
│   ├── pages/              # Vistas principales
│   │   ├── Home.tsx        # Página de inicio
│   │   └── Entities.tsx    # Listado completo
│   │
│   ├── services/           # Servicios externos
│   │   └── api.ts          # Configuración API
│   │
│   ├── App.tsx             # Componente raíz
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos globales
│
├── public/                 # Recursos estáticos
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Instalación y Ejecución

### Requisitos previos

- Node.js ≥ 18.x
- npm ≥ 9.x o yarn ≥ 1.22

### 1. Clonar el repositorio

```bash
git clone https://github.com/Hazielcode/rickmorty-react.git
cd rickmorty-react
```

### 2. Instalar dependencias

```bash
npm install
# o con yarn
yarn install
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
# o con yarn
yarn dev
```

La aplicación estará disponible en: **http://localhost:5173**

### 4. Build de producción

```bash
npm run build
npm run preview
```

Los archivos optimizados se generarán en `/dist`.

---

## 🌐 Deploy

### Opción 1: Vercel (Recomendado)

1. Instala Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Despliega con un comando:
   ```bash
   vercel
   ```

### Opción 2: Vercel (GitHub Integration)

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Conecta tu repositorio de GitHub
3. Configura:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. ¡Deploy automático con cada push!

### Opción 3: Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 🎥 Video Demostración

📹 **[Ver demo en YouTube](https://youtube.com/tu-video)**

**Contenido del video:**
- ✅ Navegación entre rutas `/` y `/entities`
- ✅ Funcionalidad de paginación
- ✅ Tour por el código fuente
- ✅ Commits en GitHub
- ✅ Deploy en producción

---



## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea tu rama: `git checkout -b feature/AmazingFeature`
3. Commit tus cambios: `git commit -m 'Add: nueva funcionalidad'`
4. Push a la rama: `git push origin feature/AmazingFeature`
5. Abre un Pull Request

---

## 📝 Roadmap

- [ ] Búsqueda de personajes por nombre
- [ ] Filtros por especie y estado
- [ ] Vista detalle de personaje
- [ ] Modo oscuro/claro
- [ ] PWA con soporte offline
- [ ] Testing con Vitest + React Testing Library

---

## 👨‍💻 Autor

**Samir Haziel Alfonso Solorzano**

Desarrollador Full Stack en formación | TECSUP

- 🌍 Lima, Perú
- 💼 GitHub: [@Hazielcode](https://github.com/Hazielcode)
- 📧 Email: [samir.alfonso@tecsup.edu.pe](mailto:samir.alfonso@tecsup.edu.pe)
- 🔗 LinkedIn: [haziel](https://linkedin.com/haziel1215)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- [Rick and Morty API](https://rickandmortyapi.com/) por la API gratuita
- [TECSUP](https://www.tecsup.edu.pe/) por la formación académica
- Comunidad de React y Vite por las herramientas

---

<div align="center">

**⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub ⭐**

Hecho con 💚 y ☕ en Lima, Perú

</div>
