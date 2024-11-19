import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isDark, setDark] = useState(false);

  const addTask = () => {
    const newTask = prompt("Enter a new task: ");
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false }]);
    }
  };

  const toggleTaskComplete = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => {
        return i === index ? { ...task, completed: !task.completed } : task;
      })
    );
    console.log(
      "task Name: ",
      tasks[index].text,
      "completed: ",
      tasks[index].completed
    );
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar numberOfTasks={tasks} darkMode={isDark} />
      <div className={isDark ? "main dark-mode" : "main"}>
        <h1 className="title">My To-Do List</h1>
        <div className="container">
          <div className="task-list">
            {/*code will be pasted here*/}
            {tasks.map((task, index) => {
              return task.completed ? (
                ""
              ) : (
                <div className="task-container" key={index}>
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      onClick={() => {
                        console.log(
                          "We are in 1st onclick and its index is: ",
                          index
                        );
                        toggleTaskComplete(index);
                      }}
                    />
                  </div>
                  <div className={"task-name"}>
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
              );
            })}
          </div>
        </div>
        <button onClick={addTask}>Add Task</button>
        <button
          onClick={() => {
            setDark((isDark) => !isDark);
          }}
        >
          Dark Mode
        </button>
        <h1 className="title">Completed Task</h1>
        <div className={isDark ? "container dark-mode" : "container"}>
          <div className="task-list">
            {tasks.map((task, index) => {
              return task.completed ? (
                <div className="task-container" key={index}>
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onClick={() => {
                        console.log(
                          "We are in 2nd onclick and its index is: ",
                          index
                        );
                        toggleTaskComplete(index);
                      }}
                    />
                  </div>
                  <div
                    className={
                      task.completed ? "task-name completed" : "task-name"
                    }
                  >
                    <h4>{task.text}</h4>
                  </div>

                  <div className="remove-container">
                    <span>&#x2715;</span>
                  </div>
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
