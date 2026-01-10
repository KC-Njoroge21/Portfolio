import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

const App = () => {
  const homeRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen overflow-y-scroll scroll-smooth">
      <div className="lg:h-screen h-fit">
        <Header scrollIntoSection={scrollToSection} refs={{homeRef, aboutRef, experienceRef, projectsRef}} />
        <Profile ref={homeRef} />
      </div>
      <About ref={aboutRef}/>
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef}  />
    </div>
  );
};

export default App;
