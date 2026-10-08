# Catálogo interactivo de películas

Aplicación web estilo Netflix/IMDb hecha con **React + Vite**, sin backend. Laboratorio de Diseño Web.

## Funcionalidades

- Catálogo con imagen, título, género, año, calificación y descripción.
- Buscador por título que se actualiza mientras se escribe.
- Filtros por género, año, calificación mínima y solo favoritas (se combinan con el buscador).
- Detalle de cada película (se abre al hacer clic en el póster y se cierra con ✕, clic afuera o Esc).
- Favoritos: agregar, quitar y ver solo las favoritas.
- Valoración personal de 1 a 5 estrellas.
- Mensaje cuando no hay resultados.

## Estructura

```
src/
├── data/
│   └── movies.js
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── Filters.jsx
│   ├── MovieList.jsx
│   ├── MovieCard.jsx
│   ├── MovieDetail.jsx
│   ├── Favorites.jsx
│   ├── StarRating.jsx
│   └── Poster.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

El estado compartido (`query`, `filters`, `favorites`, `ratings`, `selectedId`) vive en `App.jsx` y se pasa a los componentes por props. Los favoritos se guardan solo como IDs.

## Cómo ejecutarlo

Requisitos: Node.js 18 o superior.

```bash
git clone <URL-DEL-REPOSITORIO>
cd catalogo-peliculas
npm install
npm run dev
```

Luego abrir la URL que muestra la terminal (por defecto http://localhost:5173).

## Autor

Juan Esteban
