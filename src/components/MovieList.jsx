import MovieCard from "./MovieCard";

function MovieList({ movies, favorites, ratings, onSelect, onToggleFavorite, onRate, onClear }) {
  if (movies.length === 0) {
    return (
      <div className="empty">
        <p>No hay películas que coincidan con la búsqueda y los filtros.</p>
        <button className="btn" onClick={onClear}>
          Limpiar búsqueda y filtros
        </button>
      </div>
    );
  }

  return (
    <section className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          userRating={ratings[movie.id] || 0}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
          onRate={onRate}
        />
      ))}
    </section>
  );
}

export default MovieList;
