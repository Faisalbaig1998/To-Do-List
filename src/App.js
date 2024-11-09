import "./App.css";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = prompt("Enter a new task: ");
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false }]);
    }
  };

  const taskComplete = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = () => {
    setTasks(tasks.slice(0, -1));
  };

  return (
    <>
      <h1 id="title">My To-Do List</h1>
      <div id="task-container">
        <ul id="task-list">
          {tasks.map((task, index) => (
            <li
              key={index}
              onClick={() => taskComplete(index)}
              className={task.completed ? "completed" : ""}
            >
              <span>{task.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={addTask}>Add Task</button>
      <button onClick={removeTask}>Remove Task</button>
    </>
  );
};

export default App;