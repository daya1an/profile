import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => (
  <ThemeProvider>
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        {/* <Achievements /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
