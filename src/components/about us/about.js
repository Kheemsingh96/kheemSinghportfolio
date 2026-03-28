import React, { useEffect, useRef, useState } from 'react';
import { FiFigma, FiPenTool, FiLayers, FiSearch } from 'react-icons/fi';
import './about.css';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`ux-about-section ${isVisible ? 'animate-section' : ''}`} 
      id="about" 
      ref={sectionRef}
    >
      <div className="ux-bg-glow glow-1"></div>
      <div className="ux-bg-glow glow-2"></div>

      <div className="ux-container">
        <div className="ux-bento-grid">

          <div className="ux-box ux-intro">
            <h1>Hi I’m <span className="ux-gradient-text">Kheem Singh Latwal</span></h1>
            <h2>UI/UX Designer</h2>
            <p>
              A passionate UI/UX Designer with 2 years of hands-on experience in creating clean, user-focused digital interfaces. I specialize in designing intuitive websites, mobile apps, dashboards, and landing pages that not only look beautiful but also solve real user problems.
            </p>
          </div>

          <div className="ux-box ux-exp">
            <h3 className="ux-gradient-text">2+</h3>
            <p>Years Experience</p>
          </div>

          <div className="ux-box ux-skills">
            <div className="ux-box-header">
              <div className="icon-wrapper">
                <FiLayers className="ux-icon" />
              </div>
              <h4>Skills</h4>
            </div>
            <div className="ux-tags">
              <span>UX Research</span>
              <span>Wireframing</span>
              <span>Prototyping</span>
              <span>Usability Testing</span>
              <span>Interaction Design</span>
              <span>Design Systems</span>
            </div>
          </div>

          <div className="ux-box ux-tools">
            <div className="ux-box-header">
              <div className="icon-wrapper">
                <FiPenTool className="ux-icon" />
              </div>
              <h4>My Tools</h4>
            </div>
            <div className="ux-tool-icons">
              <div className="ux-tool">
                <FiFigma className="brand-icon figma" /> 
                <span>Figma</span>
              </div>
              <div className="ux-tool">
                <div className="custom-adobe-icon xd">Xd</div>
                <span>Adobe XD</span>
              </div>
              <div className="ux-tool">
                <div className="custom-adobe-icon ps">Ps</div>
                <span>Photoshop</span>
              </div>
            </div>
          </div>

          <div className="ux-box ux-process">
            <div className="ux-box-header">
              <div className="icon-wrapper">
                <FiSearch className="ux-icon" />
              </div>
              <h4>My Design Process</h4>
            </div>
            <div className="ux-process-steps-container">
              <div className="ux-process-line"></div>
              <div className="ux-step">
                <span>01</span>
                <p>Discover</p>
              </div>
              <div className="ux-step">
                <span>02</span>
                <p>Define</p>
              </div>
              <div className="ux-step">
                <span>03</span>
                <p>Ideate</p>
              </div>
              <div className="ux-step">
                <span>04</span>
                <p>Design</p>
              </div>
              <div className="ux-step">
                <span>05</span>
                <p>Test</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;