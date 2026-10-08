import { useState } from "react";
import movies from "./data/movies";
import Header from "./components/Header";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Favorites from "./components/Favorites";
import "./App.css";

const initialFilters = {
  genre: "all",
  year: "all",
  minRating: 0,
  onlyFavorites: false,
};

function App() {
  // Estado compartido de la app
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(initialFilters);
  const [favorites, setFavorites] = useState([]); // solo IDs
  const [ratings, setRatings] = useState({}); // { idPelicula: estrellas }
  const [selectedId, setSelectedId] = useState(null);

  // Agrega o quita una película de favoritos usando solo su ID
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // Guarda la valoración personal (1 a 5)
  const rateMovie = (id, stars) => {
    setRatings((prev) => ({ ...prev, [id]: stars }));
  };

  const clearAll = () => {
    setQuery("");
    setFilters(initialFilters);
  };

  // Buscador + filtros combinados
  const text = query.trim().toLowerCase();
  const visibleMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(text);
    const matchesGenre = filters.genre === "all" || movie.genre === filters.genre;
    const matchesYear = filters.year === "all" || movie.year === Number(filters.year);
    const matchesRating = movie.rating >= filters.minRating;
    const matchesFavorite = !filters.onlyFavorites || favorites.includes(movie.id);

    return matchesTitle && matchesGenre && matchesYear && matchesRating && matchesFavorite;
  });

  // Se obtienen los objetos a partir de los IDs, sin duplicarlos en el estado
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));
  const selectedMovie = movies.find((movie) => movie.id === selectedId);

  const genres = [...new Set(movies.map((movie) => movie.genre))].sort();
  const years = [...new Set(movies.map((movie) => movie.year))].sort((a, b) => b - a);

  return (
    <div className="app">
      <Header query={query} onQueryChange={setQuery} favoritesCount={favorites.length} />

      <main className="content">
        <Favorites movies={favoriteMovies} onSelect={setSelectedId} onRemove={toggleFavorite} />

        <Filters
          filters={filters}
          onFiltersChange={setFilters}
          genres={genres}
          years={years}
        />

        <p className="results-count">
          {visibleMovies.length} de {movies.length} películas
        </p>

        <MovieList
          movies={visibleMovies}
          favorites={favorites}
          ratings={ratings}
          onSelect={setSelectedId}
          onToggleFavorite={toggleFavorite}
          onRate={rateMovie}
          onClear={clearAll}
        />
      </main>

      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          isFavorite={favorites.includes(selectedMovie.id)}
          userRating={ratings[selectedMovie.id] || 0}
          onToggleFavorite={toggleFavorite}
          onRate={rateMovie}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}

export default App;
