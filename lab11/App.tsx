import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Complete Lab 11", completed: false },
    { id: 2, task: "Review JSX Events and State", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  function handleComplete(id: number) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function handleAddTask() {
    if (newTask.trim() === "") return;
    const newTodo = {
      id: todos.length + 1,
      task: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
  }

  return (
    <div style={{
      fontFamily: "Georgia, serif",
      maxWidth: "520px",
      margin: "60px auto",
      padding: "40px",
      background: "#1a1a2e",
      borderRadius: "16px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      color: "#eaeaea"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "24px", color: "#e2b96f", letterSpacing: "1px" }}>
        To-Do List
      </h1>

      <ul style={{ padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{
            marginBottom: "12px",
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#16213e",
            padding: "12px 16px",
            borderRadius: "8px",
          }}>
            <span style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "#666" : "#eaeaea",
              fontSize: "1rem",
            }}>
              {todo.task}
            </span>

            {!todo.completed && (
              <button
                onClick={() => handleComplete(todo.id)}
                style={{
                  background: "#e2b96f",
                  border: "none",
                  borderRadius: "6px",
                  padding: "4px 12px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#1a1a2e",
                }}
              >
                X
              </button>
            )}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "24px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #e2b96f",
            background: "#16213e",
            color: "#eaeaea",
            fontSize: "1rem",
          }}
        />
        <button
          onClick={handleAddTask}
          style={{
            background: "#e2b96f",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            cursor: "pointer",
            fontWeight: "bold",
            color: "#1a1a2e",
            fontSize: "1rem",
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default App;