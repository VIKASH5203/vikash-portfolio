import React, { useState, useEffect } from 'react';
import CustomNavbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Home from './sections/Home';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Blogs from './sections/Blogs';
import Contact from './sections/Contact';

function App() {
  // Theme state management at the top level
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  // Apply theme to document and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <CustomNavbar />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Blogs />
        <Contact />
      </main>
    </>
  );
}

export default App;
