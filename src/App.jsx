import './styles/components.css'
import Dock from "./components/Dock"
import Tooltip from './components/Tooltip'
import './styles/app.css'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Reviews from './sections/Reviews'
import { useState, useEffect } from 'react'
import { initAllAnimations } from './utils/animations'

function App() {
  useEffect(() => {
    // Temporarily disable animations to fix visibility issue
    // Initialize all fabulous animations with proper error handling
    try {
      // Wait for DOM to be fully loaded
      setTimeout(() => {
        // Only initialize safe animations
        // initAllAnimations(); // Commented out to fix visibility issue
      }, 100);
    } catch (error) {
      console.error('Animation initialization error:', error);
      // If animations fail, ensure the portfolio still works
      document.body.style.visibility = 'visible';
    }
  }, []);

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Reviews />
     
      <Contact />
      
    </>
  );
}

export default App