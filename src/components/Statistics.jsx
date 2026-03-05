export default function Statistics({ total, completedCount, pendingCount }) {
  const stats = [
    { label: "TOTAL TASKS", value: total,          color: "#1a1a1a" },
    { label: "COMPLETED",   value: completedCount, color: "#15803d" },
    { label: "PENDING",     value: pendingCount,   color: "#c9a84c" },
  ];

  return (
    <div>
      <p style={S.sectionLabel}>Statistics</p>

      <div style={{ display: "flex", gap: "12px", marginBottom: "28px" }}>
        {stats.map((s) => (
          <div key={s.label} style={S.statBox}>
            <div style={{ fontSize: "36px", fontWeight: "700", color: s.color, lineHeight: 1 }}>
              {s.value}
            </div>
            <div style={S.statLabel}>{s.label}</div>
          </div>
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
  statBox: {
    flex: 1,
    border: "1px solid #ccc8bb",
    background: "#faf8f3",
    padding: "18px 12px",
    textAlign: "center",
  },
  statLabel: {
    fontSize: "10px",
    letterSpacing: "1.5px",
    color: "#888",
    marginTop: "6px",
    fontFamily: "'Georgia', serif",
  },
};
