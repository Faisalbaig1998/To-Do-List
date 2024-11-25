import { useState, useEffect } from "react";
import "./css/Navbar.css";

const Navbar = (props) => {
  const [show, setShow] = useState(true);
  //   console.log("show value: ", show);

  const toggleShow = () => {
    // console.log("in toggleshow");
    const elem = document.getElementById("Navbar");
    elem.classList.toggle("hide-navbar");
  };

  useEffect(() => {
    // console.log("show value:", show);
    // console.log("Dark props in Navbar: ", props.darkMode);
  }, [show, props]);

  return (
    <div id="Navbar" className={props.darkMode ? "dark-mode" : ""}>
      <div
        className="hamburger-container"
        onClick={() => setShow((prevShow) => !prevShow)}
      >
        <div
          className="hamburger"
          onClick={(e) => {
            const screenSize = window.innerWidth;
            console.log(screenSize);
            if (screenSize >= 425) {
              toggleShow();
            }
            // console.log("in Hamburger");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={props.darkMode ? "sidebar-items dark-mode" : "sidebar-items"}
      >
        <ul>
          <li>
            <a href="#">My Tasks</a>
            {props.numberOfTasks > 0 && <p>{props.numberOfTasks}</p>}
          </li>
          <li>
            <a href="#">Important</a>
          </li>
          <li>
            <a href="#">Planned</a>
          </li>
          <li>
            <a href="#">Assigned to Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
