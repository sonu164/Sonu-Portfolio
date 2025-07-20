import { useState } from "react";
import myimg from "../assets/react.svg";

function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center overflow-hidden">
          {/* Left Side - Image + Text */}
          <div className="react-img d-flex align-items-center">
            <img
              src={myimg}
              alt="vite"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <h3 className="text-white mb-0 p-2">SONU</h3>
          </div>

          {/* Right Side - Navigation Links */}
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link${active === "home" ? " active" : ""}`}
                aria-current="page"
                onClick={() => setActive("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link${active === "about" ? " active" : ""}`}
                onClick={() => setActive("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#project"
                className={`nav-link${active === "project" ? " active" : ""}`}
                onClick={() => setActive("project")}
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link${active === "contact" ? " active" : ""}`}
                onClick={() => setActive("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
