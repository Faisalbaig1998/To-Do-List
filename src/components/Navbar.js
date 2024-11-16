import { useState, useEffect } from "react";
import "./css/Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(true);
  //   console.log("show value: ", show);

  useEffect(() => {
    console.log("show value:", show);
  }, [show]);

  return (
    <div id="Navbar">
      <div
        className="hamburger-container"
        onClick={() => setShow((prevShow) => !prevShow)}
      >
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="sidebar-items">
        <ul>
          <li>
            <a href="#">My Tasks</a>
            {/* <p>{tasks.length}</p> */}
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
