import Navbar from "./component/Navbar";
import Home from "./component/home";
import About from "./component/about";
import Project from "./component/project";
import Certificate from "./component/certificate";
import Contact from "./component/Contact";
import Form from "./component/Form";
import Card from "./component/card";
import "./App.css";
import { useState } from "react";
import PostListProvider from "./store/PostList";

function App() {
  const [Active, setActive] = useState("home");
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <PostListProvider>
      <Navbar
        setActive={setActive}
        active={Active}
        setShowFeedback={setShowFeedback}
      ></Navbar>
      {!showFeedback ? (
        Active === "home" ? (
          <>
            <Home />
            <About />
            <Project />
            <Certificate />
            <Card />
            <Contact />
          </>
        ) : (
          <>
            {Active === "about" && <About />}
            {Active === "project" && <Project />}
            {Active === "certificate" && <Certificate />}
            {Active === "contact" && <Contact />}
          </>
        )
      ) : (
        <Form setShowFeedback={setShowFeedback} />
      )}
    </PostListProvider>
  );
}

export default App;
