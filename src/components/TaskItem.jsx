const PRIORITY_DOT = { Low: "#22c55e", Medium: "#f59e0b", High: "#ef4444" };
const PRIORITY_CHIP = {
  Low:    { bg: "#dcfce7", color: "#15803d" },
  Medium: { bg: "#fef9c3", color: "#b45309" },
  High:   { bg: "#fee2e2", color: "#dc2626" },
};

export default function TaskItem({ task, onComplete, onDelete }) {
  const dot  = PRIORITY_DOT[task.priority];
  const chip = PRIORITY_CHIP[task.priority];

  return (
    <div style={{
      background: "#faf8f3",
      border: "1px solid #ddd8cc",
      borderLeft: `4px solid ${dot}`,
      padding: "16px 18px",
    }}>
      <div style={{
        fontSize: "18px",
        fontWeight: "700",
        marginBottom: "10px",
        color: task.completed ? "#aaa" : "#1a1a1a",
        textDecoration: task.completed ? "line-through" : "none",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "'Georgia', serif",
      }}>
        {task.completed && (
          <span style={{ color: "#22c55e", fontStyle: "italic", fontWeight: "400" }}>✓</span>
        )}
        {task.title}
      </div>

      <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap", alignItems: "center" }}>
        <span style={S.catChip}>
          {task.category.toUpperCase()}
        </span>

        <span style={{ ...S.prioChip, background: chip.bg, color: chip.color }}>
          <span style={{
            width: "7px", height: "7px",
            borderRadius: "50%",
            background: dot,
            marginRight: "5px",
            display: "inline-block",
            flexShrink: 0,
          }} />
          {task.priority.toUpperCase()}
        </span>

        <span style={S.dateChip}>
          {task.deadlineFormatted}
        </span>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => onComplete(task.id)}
          style={{
            ...S.actionBtn,
            borderColor: task.completed ? "#999" : "#1a1a1a",
            color:       task.completed ? "#999" : "#1a1a1a",
          }}
        >
          {task.completed ? "UNDO" : "COMPLETE"}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          style={{ ...S.actionBtn, borderColor: "#ef4444", color: "#ef4444" }}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

const S = {
  catChip: {
    fontSize: "10px", fontWeight: "700", letterSpacing: "1px",
    padding: "3px 10px", background: "#e5e1d8", color: "#444",
    fontFamily: "'Georgia', serif",
  },
  prioChip: {
    fontSize: "10px", fontWeight: "700", letterSpacing: "1px",
    padding: "3px 10px", display: "inline-flex", alignItems: "center",
    fontFamily: "'Georgia', serif",
  },
  dateChip: {
    fontSize: "10px", fontWeight: "700", letterSpacing: "1px",
    padding: "3px 10px", background: "#dbeafe", color: "#1d4ed8",
    fontFamily: "'Georgia', serif",
  },
  actionBtn: {
    padding: "7px 16px", background: "transparent",
    border: "1px solid", fontSize: "10px", fontWeight: "700",
    letterSpacing: "1.5px", cursor: "pointer",
    fontFamily: "'Georgia', serif",
  },
};
