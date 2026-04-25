import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);

  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
    };

    setTasks([...tasks, newTask]); 
    setInput(""); 
  };

  const handleRemoveTask = (id) => {
    const newList = tasks.filter((task) => task.id !== id);
    setTasks(newList);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do List</h1>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleRemoveTask(task.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;