import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Experience from "./pages/Experience";

const App = () => {
  const homeRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen overflow-y-scroll scroll-smooth">
      <div className="h-screen">
        <Header />
        <Profile />
      </div>
      <About />
      <Experience />
    </div>
  );
};

export default App;
