import { useState } from "react";
import Header        from "./components/Header";
import TaskForm      from "./components/TaskForm";
import Statistics    from "./components/Statistics";
import FilterButtons from "./components/FilterButtons";
import TaskList      from "./components/TaskList";

export default function App() {
  const [tasks,  setTasks]  = useState([]);
  const [filter, setFilter] = useState("All");
  const handleAddTask = (newTaskData) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),   
        ...newTaskData,
        completed: false,
      },
    ]);
  };

  const handleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "Completed") return t.completed;
    if (filter === "Pending")   return !t.completed;
    return true; // "All"
  });

  const total          = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount   = total - completedCount;

  return (
    <div style={{ height: "100%", width: "100%", background: "#f0ede6", fontFamily: "'Georgia', serif" }}>
      <Header />
      <div style={{
        display: "grid",
        gridTemplateColumns: "300px 1fr",
        width: "100%",
        margin: 0,
        padding: 0,
      }}>

        <TaskForm onAddTask={handleAddTask} />
        <div style={{ padding: "32px 10px" }}>
          <Statistics
            total={total}
            completedCount={completedCount}
            pendingCount={pendingCount}
          />
          <FilterButtons
            filter={filter}
            onFilterChange={setFilter}
          />
          <TaskList
            tasks={filteredTasks}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
