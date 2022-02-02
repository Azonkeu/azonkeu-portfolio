import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Aboutme from "./components/Aboutme";
import Testimonials from "./components/Testimonials";
import Timeline from './components/Timeline'

const App = () => {
  return (
    <main>
      <Navbar />
      <About />
      <Aboutme />
      <Skills />
      <Projects />
      <Timeline />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;