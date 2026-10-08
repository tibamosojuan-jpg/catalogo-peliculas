function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <label htmlFor="search" className="sr-only">
        Buscar película por título
      </label>
      <input
        id="search"
        type="search"
        placeholder="Buscar por título..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
}

export default SearchBar;
