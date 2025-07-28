import myimg from "../assets/react.svg";
import Form from "./Form";

function Navbar({ active, setActive, setShowFeedback }) {
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center overflow-hidden">
          {/* Left Side - Image + Text */}
          <div className="react-img d-flex align-items-center">
            <img
              src={myimg}
              alt="vite"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <h3 className="text-white mb-0 p-2 font-serif shadow-2xl shadow-blue-200 transform-border motion">
              FrontEnd Developer
            </h3>
          </div>

          {/* Right Side - Navigation Links */}
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link${active === "home" ? " active" : ""}`}
                aria-current="page"
                onClick={() => {
                  setActive("home");
                  setShowFeedback(false);
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link${active === "about" ? " active" : ""}`}
                onClick={() => {
                  setActive("about");
                  setShowFeedback(false);
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#project"
                className={`nav-link${active === "project" ? " active" : ""}`}
                onClick={() => {
                  setActive("project");
                  setShowFeedback(false);
                }}
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link${active === "contact" ? " active" : ""}`}
                onClick={() => {
                  setActive("contact");
                  setShowFeedback(false);
                }}
              >
                Contact
              </a>
            </li>

            <button
              type="button"
              onClick={() => setShowFeedback(true)}
              aria-label="Feedback"
              className="font-semibold  bg-gradient-to-b text-xl text-white transition-all duration-300 hover:from-green-400 hover:to-lime-500 hover:scale-105 hover:mt-6 px-4 py-2 rounded-lg mt-6"
            >
              Feedback
            </button>
          </ul>
        </div>
        <div></div>
      </div>
    </header>
  );
}

export default Navbar;
