export function FilterItem({ label, value, activeFilter, onClick }) {
  return (
    <li className={`item ${activeFilter === value ? "active" : ""}`}>
      <button
        type="button"
        onClick={() => onClick(value)}
        className="filter-link"
        aria-pressed={activeFilter === value}
      >
        {label}
      </button>
    </li>
  );
}
