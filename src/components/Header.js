import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Portfolio
            </a>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              About
            </a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
              Skills
            </a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
              Projects
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contact
            </a>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
