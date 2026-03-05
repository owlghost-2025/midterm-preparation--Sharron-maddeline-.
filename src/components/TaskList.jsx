import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onComplete, onDelete }) {
  return (
    <div>
      <p style={S.sectionLabel}>Task List</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {tasks.length === 0 ? (
          <div style={S.emptyBox}>
            No tasks to display.
          </div>
        ) : (

          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))
        )}
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
  emptyBox: {
    padding: "32px",
    textAlign: "center",
    color: "#aaa",
    fontSize: "14px",
    border: "1px dashed #ccc",
    background: "#faf8f3",
    fontStyle: "italic",
    fontFamily: "'Georgia', serif",
  },
};
