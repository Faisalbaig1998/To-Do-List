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

  const toggleTaskComplete = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1 className="title">My To-Do List</h1>
      <div className="container">
        <div className="task-list">
          {tasks.map((task, index) => (
            <div className="task-container" key={index}>
              <div className="checkBox">
                <input
                  type="checkbox"
                  onClick={() => {
                    toggleTaskComplete(index);
                  }}
                />
              </div>
              <div className="task-name">
                <h4>{task.text}</h4>
              </div>
              <div className="remove-container">
                <span
                  onClick={() => {
                    removeTask(index);
                  }}
                >
                  &#x2715;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={addTask}>Add Task</button>
      <div className="container">
        <h1 className="title">Completed Task</h1>
        <div className="task-list">
          {tasks.map((task, index) => (
            <div className="task-container" key={index}>
              <div className="checkBox">
                <input type="checkbox" />
              </div>
              <div className="task-name">
                <h4>{task.text}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
