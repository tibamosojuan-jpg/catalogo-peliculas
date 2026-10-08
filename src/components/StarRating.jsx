import { useState } from "react";

function StarRating({ value, onRate }) {
  const [hover, setHover] = useState(0);
  const shown = hover || value;

  return (
    <div className="stars" onMouseLeave={() => setHover(0)}>
      <span className="stars-label">Tu nota:</span>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={star <= shown ? "star on" : "star"}
          onClick={() => onRate(star)}
          onMouseEnter={() => setHover(star)}
          aria-label={`Calificar con ${star} estrella${star > 1 ? "s" : ""}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default StarRating;
