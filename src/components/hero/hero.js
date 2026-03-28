import React from 'react';
import { FiPlay } from 'react-icons/fi';
import { FaFigma } from 'react-icons/fa';
import manImage from '../../assets/images/man.png';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="bg-grid"></div>
      <div className="ambient-glow"></div>

      <main className="hero-main">
        <div className="hero-stats reveal-left">
          <div className="stat-card glass-panel">
            <h2 className="gradient-text">20+</h2>
            <p>UI/UX Projects</p>
          </div>
          
          <div className="stat-card tools-card">
            <p className="tools-title">Design Tools</p>
            <div className="tools-icons">
              <div className="tool-icon-wrapper figma-bg">
                <FaFigma />
              </div>
              <div className="tool-icon-wrapper xd-bg">
                <span className="text-icon">Xd</span>
              </div>
              <div className="tool-icon-wrapper ps-bg">
                <span className="text-icon">Ps</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image-container reveal-center">
          <img src={manImage} alt="Portfolio" className="hero-img hover-float" />
          
          <div className="bg-text-wrapper">
            <h1 className="outline-text">CREATIVE</h1>
            <h1 className="outline-text offset-right">DESIGNER</h1>
          </div>
        </div>

        <div className="hero-description reveal-right">
          <p className="lead-text">
            I am Kheem Singh Latwal, I create designs that not only fix problems but also bring joy to every user’s journey.
          </p>
          <div className="action-row">
            <div className="play-button-outer">
              <div className="play-ripple"></div>
              <button className="play-button-inner">
                <FiPlay className="icon-play" />
              </button>
            </div>
            <span className="action-label">Play Showreel</span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;