function Favorites({ movies, onSelect, onRemove }) {
  return (
    <section className="favorites">
      <h2>Mis favoritas</h2>

      {movies.length === 0 ? (
        <p className="muted">Toca el ♡ de una película para guardarla aquí.</p>
      ) : (
        <ul className="fav-list">
          {movies.map((movie) => (
            <li key={movie.id} className="fav-chip">
              <button className="fav-chip-title" onClick={() => onSelect(movie.id)}>
                {movie.title}
              </button>
              <button
                className="fav-chip-remove"
                onClick={() => onRemove(movie.id)}
                aria-label={`Quitar ${movie.title} de favoritos`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Favorites;
