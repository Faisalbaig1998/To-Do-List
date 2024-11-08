import "./App.css";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    newTask = prompt("Enter a new task: ");
    if (newTask != "") {
      setTasks([...tasks, newTask]);
    }
  };

  const removeTask = () => {
    console.log(tasks);
    setTasks(tasks.slice(0, -1));
  };

  return (
    <>
      <h1 id="title">My To-Do List</h1>
      <div id="task-list">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      <button onClick={addTask}>Add Task</button>
      <button onClick={removeTask}>Remove Task</button>
    </>
  );
};

export default App;
