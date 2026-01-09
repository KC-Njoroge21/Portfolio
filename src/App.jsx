import React from 'react'
import Header from './components/Header'
import About from './pages/About'

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
    <div>
      <Header />
      <About />
    </div>
  )
}

export default App