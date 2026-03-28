import React, { useState } from 'react';
import './header.css';

const Header = ({ onHireClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-header fade-in-down">
      <div className="header-container">
        <div className="logo-wrapper">
          <div className="logo-icon-box">
            <div className="dot"></div>
            <div className="bar"></div>
          </div>
          <span className="logo-name">Kheem.ux</span>
        </div>
        
        <div className={`header-right ${isMenuOpen ? 'active' : ''}`}>
          <nav className="nav-menu">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
          <button className="hire-btn" onClick={() => { onHireClick(); setIsMenuOpen(false); }}>
            HIRE ME
          </button>
        </div>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
    </header>
  );
};

export default Header;