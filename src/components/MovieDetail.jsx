import { useEffect } from "react";
import Poster from "./Poster";
import StarRating from "./StarRating";

function MovieDetail({ movie, isFavorite, userRating, onToggleFavorite, onRate, onClose }) {
  // Cerrar con la tecla Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose} aria-label="Cerrar detalle">
          ✕
        </button>

        <Poster src={movie.image} title={movie.title} />

        <div className="detail-info">
          <h2 id="detail-title">{movie.title}</h2>
          <p className="card-meta">
            <span className="tag">{movie.genre}</span>
            <span>{movie.year}</span>
            <span className="score">★ {movie.rating} / 10</span>
          </p>
          <p className="detail-desc">{movie.description}</p>

          <StarRating value={userRating} onRate={(stars) => onRate(movie.id, stars)} />
          {userRating > 0 && (
            <p className="muted">
              Le diste {userRating} de 5 estrellas.
            </p>
          )}

          <button className="btn" onClick={() => onToggleFavorite(movie.id)}>
            {isFavorite ? "♥ Quitar de favoritos" : "♡ Agregar a favoritos"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
