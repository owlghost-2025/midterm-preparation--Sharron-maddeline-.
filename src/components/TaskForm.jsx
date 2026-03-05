import { useState } from "react";

const CATEGORIES = ["Work", "Personal", "Shopping", "Health", "Study", "Other"];
const PRIORITIES = ["Low", "Medium", "High"];

export default function TaskForm({ onAddTask }) {
  const [title,    setTitle]    = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");
  const [errTitle,    setErrTitle]    = useState("");
  const [errCategory, setErrCategory] = useState("");
  const [errPriority, setErrPriority] = useState("");
  const [errDeadline, setErrDeadline] = useState("");

  const handleAddTask = () => {
    let valid = true;
    if (!title.trim()) { setErrTitle("Title is required");          valid = false; }
    else setErrTitle("");
    if (!category)     { setErrCategory("Category must be selected"); valid = false; }
    else setErrCategory("");
    if (!priority)     { setErrPriority("Priority must be chosen");   valid = false; }
    else setErrPriority("");

    if (!deadline)     { setErrDeadline("Deadline is required");      valid = false; }
    else setErrDeadline("");
    if (!valid) return;
    const d = new Date(deadline + "T00:00:00");
    const formatted = d.toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase();

    onAddTask({
      title: title.trim(),
      category,
      priority,
      deadlineFormatted: formatted,
    });

    setTitle("");
    setCategory("");
    setPriority("");
    setDeadline("");
    setErrTitle("");
    setErrCategory("");
    setErrPriority("");
    setErrDeadline("");
  };

  return (
    <div style={{ padding: "32px 10px", borderRight: "1px solid #ddd8cc" }}>
      <p style={S.sectionLabel}>Add New Task</p>

      <div style={S.field}>
        <label style={S.flabel}>Task Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => { setTitle(e.target.value); setErrTitle(""); }}
          placeholder="e.g. Study React"
          style={{ ...S.input, borderColor: errTitle ? "#ef4444" : "#ccc" }}
        />
        {errTitle && <span style={S.err}>{errTitle}</span>}
      </div>

      <div style={S.field}>
        <label style={S.flabel}>Category</label>
        <select
          value={category}
          onChange={(e) => { setCategory(e.target.value); setErrCategory(""); }}
          style={{ ...S.input, ...S.select, borderColor: errCategory ? "#ef4444" : "#ccc" }}
        >
          <option value="">Select category...</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {errCategory && <span style={S.err}>{errCategory}</span>}
      </div>

      <div style={S.field}>
        <label style={S.flabel}>Priority</label>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
          {PRIORITIES.map((p) => (
            <label key={p} style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "14px", color: "#333" }}>
              <input
                type="radio"
                name="priority_radio"
                value={p}
                checked={priority === p}
                onChange={() => { setPriority(p); setErrPriority(""); }}
                style={{ width: "15px", height: "15px", accentColor: "#1a1a1a" }}
              />
              {p}
            </label>
          ))}
        </div>
        {errPriority && <span style={S.err}>{errPriority}</span>}
      </div>

      <div style={S.field}>
        <label style={S.flabel}>Deadline</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => { setDeadline(e.target.value); setErrDeadline(""); }}
          style={{ ...S.input, borderColor: errDeadline ? "#ef4444" : "#ccc" }}
        />
        {errDeadline && <span style={S.err}>{errDeadline}</span>}
      </div>

      <button onClick={handleAddTask} style={S.submitBtn}>
        + ADD TASK
      </button>
    </div>
  );
}

const S = {
  sectionLabel: {
    fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase",
    color: "#888", margin: "0 0 14px 0", fontFamily: "'Georgia', serif",
  },
  field: { marginBottom: "20px" },
  flabel: {
    display: "block", fontSize: "10px", letterSpacing: "2px",
    textTransform: "uppercase", color: "#444", marginBottom: "7px",
    fontWeight: "700", fontFamily: "'Georgia', serif",
  },
  input: {
    width: "100%", padding: "10px 12px", fontSize: "14px",
    background: "#fff", outline: "none", fontFamily: "'Georgia', serif",
    color: "#333", boxSizing: "border-box", border: "1px solid #ccc",
  },
  select: { appearance: "none", cursor: "pointer" },
  err: {
    display: "block", fontSize: "12px", color: "#ef4444",
    marginTop: "4px", fontFamily: "'Georgia', serif",
  },
  submitBtn: {
    width: "100%", padding: "13px", background: "#1a1a1a", color: "#fff",
    border: "none", fontSize: "12px", fontWeight: "700", letterSpacing: "2px",
    cursor: "pointer", marginTop: "8px", fontFamily: "'Georgia', serif",
  },
};
