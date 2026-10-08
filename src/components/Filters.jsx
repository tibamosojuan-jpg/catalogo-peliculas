function Filters({ filters, onFiltersChange, genres, years }) {
  // Actualiza solo el campo que cambió
  const update = (field, value) => {
    onFiltersChange({ ...filters, [field]: value });
  };

  return (
    <section className="filters" aria-label="Filtros">
      <label>
        Género
        <select value={filters.genre} onChange={(e) => update("genre", e.target.value)}>
          <option value="all">Todos</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>

      <label>
        Año
        <select value={filters.year} onChange={(e) => update("year", e.target.value)}>
          <option value="all">Todos</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>

      <label>
        Calificación mínima
        <select
          value={filters.minRating}
          onChange={(e) => update("minRating", Number(e.target.value))}
        >
          <option value={0}>Cualquiera</option>
          <option value={7}>7 o más</option>
          <option value={8}>8 o más</option>
          <option value={9}>9 o más</option>
        </select>
      </label>

      <label className="checkbox">
        <input
          type="checkbox"
          checked={filters.onlyFavorites}
          onChange={(e) => update("onlyFavorites", e.target.checked)}
        />
        Solo favoritas
      </label>
    </section>
  );
}

export default Filters;
