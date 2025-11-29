export default function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search-floating-group">
      <input
        type="text"
        className="search-floating-input"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder=" "
      />
    </div>
  );
}
