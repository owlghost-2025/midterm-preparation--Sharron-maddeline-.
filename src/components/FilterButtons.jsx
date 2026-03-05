export default function FilterButtons({ filter, onFilterChange }) {
  const options = ["All", "Completed", "Pending"];

  return (
    <div>
      <p style={S.sectionLabel}>Filter Tasks</p>

      <div style={{ display: "flex", marginBottom: "24px", border: "1px solid #ccc8bb" }}>
        {options.map((f, i) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            style={{
              flex: 1,
              padding: "10px 0",
              border: "none",
              borderRight: i < 2 ? "1px solid #ccc8bb" : "none",
              background: filter === f ? "#1a1a1a" : "#faf8f3",
              color: filter === f ? "#fff" : "#555",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              cursor: "pointer",
              fontFamily: "'Georgia', serif",
            }}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

const S = {
  sectionLabel: {
    fontSize: "10px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "#888",
    margin: "0 0 14px 0",
    fontFamily: "'Georgia', serif",
  },
};
