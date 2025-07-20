import Navbar from "./component/Navbar";
import Home from "./component/home";
import About from "./component/about";
import Project from "./component/project";
import Certificate from "./component/certificate";
import Contact from "./component/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Project></Project>
      <Certificate></Certificate>
      <Contact></Contact>
    </>
  );
}

export default App;
