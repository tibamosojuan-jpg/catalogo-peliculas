import { useState } from "react";

// Muestra el póster; si la imagen no carga, muestra el título como respaldo
function Poster({ src, title }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return <div className="poster poster-fallback">{title}</div>;
  }

  return <img className="poster" src={src} alt={`Póster de ${title}`} onError={() => setFailed(true)} />;
}

export default Poster;
