import SearchBar from "./SearchBar";

function Header({ query, onQueryChange, favoritesCount }) {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">Cartelera</h1>
        <SearchBar value={query} onChange={onQueryChange} />
        <span className="fav-count" title="Películas en favoritos">
          ♥ {favoritesCount}
        </span>
      </div>
    </header>
  );
}

export default Header;
