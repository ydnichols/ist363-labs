import {useState} from "react";

function App() {
  
  const [todos, setTodos] = useState([
    {id: 1, task: "Completed Lab 11", completed: false},
    {id: 2, task: "Review JSX Events and State", completed: false},
  ]);

  const [newTask, setNewTask] = useState("");

  function handleComplete(id: number) {
    const uodatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, completed: true};
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
    <div style={{fontFamily: "Arial, sans-serif", maxWidth: "500px", margin: "40px auto"}}>
      <h1>To-Do List</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{marginBottom: "10px", listStyle: "none"}}>
            
            <span style={{textDeoration: todo.completed ? "line-through" : "none", color: todo.completed ? "gray" : "black",}}>
              {todo.task}
            </span>

            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)} style={{marginLeft: "10px"}}>
                X
              </button>
            )}
          </li>
        ))}
      </ul>

      <div style={{marginTop: "20px"}}>
        <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{padding: "6px", width: "300px"}}
        />
        <button
        onClick={handleAddTask}
        style={{marginLeft: "10px", padding: "6px 12px"}}>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default App;