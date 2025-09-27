import React from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
