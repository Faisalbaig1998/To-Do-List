import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  // const [tasks, setTasks] = useState([]);

  const [tasks, setTasks] = useState(() => {
    const temptasks = localStorage.getItem("tasks");
    return temptasks ? JSON.parse(temptasks) : [];
  });

  const [isDark, setDark] = useState(() => {
    // Load initial dark mode setting from localStorage
    const storedIsDark = localStorage.getItem("isDark");
    return storedIsDark ? storedIsDark === "true" : false;
  });

  const addTask = () => {
    const newTask = prompt("Enter a new task: ");
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false }]);
    }
    console.log("Task added");
    // localStorage.setItem("text", newTask);
  };

  useEffect(() => {
    // console.log("Updated tasks: ", tasks[0]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("isDark", isDark);
  }, [tasks, isDark]);

  const toggleTaskComplete = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => {
        return i === index ? { ...task, completed: !task.completed } : task;
      })
    );
    console.log("Task status updated");
    // console.log(
    //   "task Name: ",
    //   tasks[index].text,
    //   "completed: ",
    //   tasks[index].completed
    // );
  };

  const clearTasks = () => {
    setTasks([]);
  };
  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    // localStorage.removeItem("tasks");
    localStorage.clear();
  };

  return (
    <>
      <Navbar numberOfTasks={tasks.length} darkMode={isDark} />
      <div className={isDark ? "main dark-mode" : "main"}>
        <h1 className="title">My To-Do List</h1>
        <div className="container">
          <div className="task-list">
            {/*Task code starts here*/}
            {/* {tasks
              .filter((task) => !task.completed)
              .map((task, index) => (
                <div className="task-container" key={index}>
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      onClick={() => {
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
              ))} */}

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
                        // console.log(
                        //   "We are in 1st onclick and its index is: ",
                        //   index
                        // );
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
            {/*Code Ends Here*/}
          </div>
        </div>
        <div className="button-container">
          <button onClick={addTask} aria-label="Add a new task">
            Add Task
          </button>
          <button
            onClick={() => setDark((isDark) => !isDark)}
            aria-label="Toggle dark mode"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
          <button onClick={clearTasks} aria-label="Clear all Tasks">
            Clear Tasks
          </button>
        </div>

        <h1 className="title">Completed Task</h1>
        <div className={isDark ? "container dark-mode" : "container"}>
          <div className="task-list">
            {/*Functionioning starts here*/}
            {tasks.map((task, index) => {
              return task.completed ? (
                <div className="task-container" key={index}>
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onClick={() => {
                        // console.log(
                        //   "We are in 2nd onclick and its index is: ",
                        //   index
                        // );
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
            {/* Functionioning Ends Here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
