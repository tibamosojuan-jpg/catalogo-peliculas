import Poster from "./Poster";
import StarRating from "./StarRating";

function MovieCard({ movie, isFavorite, userRating, onSelect, onToggleFavorite, onRate }) {
  return (
    <article className="card">
      <button className="card-poster" onClick={() => onSelect(movie.id)}>
        <Poster src={movie.image} title={movie.title} />
        <span className="sr-only">Ver detalle de {movie.title}</span>
      </button>

      <button
        className={`fav-btn ${isFavorite ? "active" : ""}`}
        onClick={() => onToggleFavorite(movie.id)}
        aria-pressed={isFavorite}
        title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        {isFavorite ? "♥" : "♡"}
      </button>

      <div className="card-body">
        <h3 className="card-title">{movie.title}</h3>
        <p className="card-meta">
          <span className="tag">{movie.genre}</span>
          <span>{movie.year}</span>
          <span className="score">★ {movie.rating}</span>
        </p>
        <p className="card-desc">{movie.description}</p>
        <StarRating value={userRating} onRate={(stars) => onRate(movie.id, stars)} />
      </div>
    </article>
  );
}

export default MovieCard;
