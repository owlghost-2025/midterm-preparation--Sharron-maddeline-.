export default function Header() {
  return (
    <div style={{ background: "#1a1a1a", textAlign: "center", padding: "36px 10px 32px" }}>
      <p style={{
        color: "#c9a84c",
        fontSize: "11px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        margin: "0 0 10px 0",
        fontFamily: "'Georgia', serif",
      }}>
        Week 1 — Preparation Midterm Project
      </p>

      <h1 style={{
        color: "#fff",
        fontSize: "42px",
        fontWeight: "700",
        margin: "0 0 20px 0",
        lineHeight: 1.2,
        letterSpacing: "-0.5px",
        fontFamily: "'Georgia', serif",
      }}>
        Task Management<br />Dashboard
      </h1>

      <span style={{
        display: "inline-block",
        background: "#c9a84c",
        color: "#1a1a1a",
        fontSize: "11px",
        fontWeight: "700",
        letterSpacing: "2px",
        padding: "6px 18px",
        fontFamily: "'Georgia', serif",
      }}>
        MEDIUM DIFFICULTY · 2 DAYS
      </span>
    </div>
  );
}
