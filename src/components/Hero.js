import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Your Name</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Web Developer</h2>
            <p className="hero-description">
              I create beautiful, responsive, and user-friendly web applications 
              using modern technologies. Passionate about clean code and great user experiences.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="100" fill="url(#gradient)" />
                  <circle cx="100" cy="80" r="30" fill="white" />
                  <path d="M70 140 Q100 120 130 140" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#667eea" />
                      <stop offset="100%" stopColor="#764ba2" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
